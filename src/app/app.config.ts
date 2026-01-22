import { provideRouter, withInMemoryScrolling } from '@angular/router';
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


export const appConfig = {
  providers: [
    provideRouter(
      [
        { path: '', component: Home },
        { path: 'about', component: About },
        { path: 'projects', component: Projects },
        { path: 'projects/:id', component: ProjectsDetails },
        { path: 'products', component: Products },
        { path: 'our-clients', component: OurClients },
        { path: 'gallery', component: Gallery },
        { path: 'services', component: Services },
        {path: 'testimonials', component: Testimonials},
        { path: 'contact', component: ContactUs }
      ],
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',   // Always go to top on navigation
        anchorScrolling: 'enabled'          // Enables #section links
      })
    ),

    provideAnimations()
  ]
};
