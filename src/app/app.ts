import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import {HeaderComponent} from "./shared_header/header/header";
import { FooterComponent} from './shared_header/footer/footer';
import { SeoConfig, SeoService } from './seo/seo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent], // add inside the list for header HeaderComponent
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('auroflux-revamp');

  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);

  constructor() {
    // Apply the SEO config attached to the active route (see app.config.ts).
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      let route = this.router.routerState.snapshot.root;
      while (route.firstChild) route = route.firstChild;
      const config = route.data['seo'] as SeoConfig | undefined;
      if (config) this.seo.update(config);
    });
  }
}
