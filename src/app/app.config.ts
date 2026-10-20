import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { ProjectsDetails } from './pages/project-details/projects-details';
import { ContactUs } from './pages/contact-us/contact-us';
import { Products } from './pages/products/products';
import { OurClients } from './pages/our-clients/our-clients';
import { Gallery } from './pages/gallery/gallery';
import { Services } from './pages/services/services';
import { Testimonials } from './pages/testimonials/testimonials';
import { Blogs } from './pages/blogs/blogs';
import { BlogDetailsComponent } from './pages/blog-details/blog-details';
import { SEO_PAGES } from './seo/seo-pages';

export const appConfig = {
  providers: [
    provideRouter(
      [
        // Detail pages (projects/:id, blog/:id) set their own SEO once their data loads.
        { path: '', component: Home, data: { seo: SEO_PAGES.home } },
        { path: 'about', component: About, data: { seo: SEO_PAGES.about } },
        { path: 'projects', component: Projects, data: { seo: SEO_PAGES.projects } },
        { path: 'projects/:id', component: ProjectsDetails },
        { path: 'products', component: Products, data: { seo: SEO_PAGES.products } },
        { path: 'our-clients', component: OurClients, data: { seo: SEO_PAGES.clients } },
        { path: 'gallery', component: Gallery, data: { seo: SEO_PAGES.gallery } },
        { path: 'services', component: Services, data: { seo: SEO_PAGES.services } },
        {path: 'testimonials', component: Testimonials, data: { seo: SEO_PAGES.testimonials }},
        {path: 'blogs', component: Blogs, data: { seo: SEO_PAGES.blogs }},
        { path: 'blog/:id', component: BlogDetailsComponent },
        { path: 'contact', loadComponent: () => import('./pages/contact-us/contact-us').then(m => m.ContactUs), data: { seo: SEO_PAGES.contact } }


      ],
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',   // Always go to top on navigation
        anchorScrolling: 'enabled'          // Enables #section links
      })
    ),

    provideAnimations()
  ]
};
