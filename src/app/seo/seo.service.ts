import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export const SITE_URL = 'https://auroflux.com';
export const SITE_NAME = 'Auroflux Technology';
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
const DEFAULT_IMAGE = '/assets/images/banner-1.webp';

export interface Crumb {
  name: string;
  path: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  /** Site-relative path of the page, e.g. '/about'. */
  path: string;
  /** Site-relative or absolute image used for social previews. */
  image?: string;
  ogType?: 'website' | 'article';
  /** schema.org WebPage subtype, e.g. 'AboutPage', 'CollectionPage'. */
  pageType?: string;
  /** Breadcrumb trail after Home. Leave empty on the home page. */
  breadcrumb?: Crumb[];
  noindex?: boolean;
  /** Extra schema.org nodes added to the page graph (FAQPage, BlogPosting...). */
  schema?: Record<string, unknown>[];
}

/**
 * Sets the title, meta description, canonical URL, Open Graph / Twitter tags and
 * the page-level JSON-LD graph. The Organization and WebSite nodes live statically
 * in index.html so crawlers that do not run JavaScript still see them.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  update(config: SeoConfig): void {
    const url = absoluteUrl(config.path);
    const image = absoluteUrl(config.image ?? DEFAULT_IMAGE);

    this.title.setTitle(config.title);
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({
      name: 'robots',
      content: config.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large',
    });

    this.meta.updateTag({ property: 'og:type', content: config.ogType ?? 'website' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.setCanonical(url);
    this.setJsonLd(config.noindex ? null : this.buildGraph(config, url, image));
  }

  private buildGraph(config: SeoConfig, url: string, image: string) {
    const crumbs = config.breadcrumb ?? [];
    const graph: Record<string, unknown>[] = [
      {
        '@type': config.pageType ?? 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: config.title,
        description: config.description,
        inLanguage: 'en-IN',
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': ORG_ID },
        primaryImageOfPage: { '@type': 'ImageObject', url: image },
        ...(crumbs.length ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
      },
    ];

    if (crumbs.length) {
      graph.push({
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [{ name: 'Home', path: '/' }, ...crumbs].map((crumb, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: crumb.name,
          item: absoluteUrl(crumb.path),
        })),
      });
    }

    return { '@context': 'https://schema.org', '@graph': [...graph, ...(config.schema ?? [])] };
  }

  private setCanonical(url: string): void {
    let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.rel = 'canonical';
      this.document.head.appendChild(link);
    }
    link.href = url;
  }

  private setJsonLd(data: object | null): void {
    const id = 'page-jsonld';
    this.document.getElementById(id)?.remove();
    if (!data) return;

    const script = this.document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data).replace(/</g, '\\u003c');
    this.document.head.appendChild(script);
  }
}

/** Turns '/about', 'assets/x.webp' or '../../assets/x.webp' into an absolute site URL. */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const clean = path.replace(/^(\.\.?\/)+/, '').replace(/^\/+/, '');
  return `${SITE_URL}/${clean}`;
}

/** Plain-text summary of at most `max` characters, cut on a word boundary. */
export function summarize(text: string, max = 155): string {
  const plain = text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  if (plain.length <= max) return plain;
  return plain.slice(0, plain.lastIndexOf(' ', max - 1)).replace(/[,.;:]$/, '') + '…';
}

/** 'June 29, 2023' -> '2023-06-29' without timezone drift. */
export function isoDate(date: string): string | undefined {
  const d = new Date(date);
  if (isNaN(d.getTime())) return undefined;
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
