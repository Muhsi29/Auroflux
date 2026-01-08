import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Service } from './pages/service/service';
import { Projects } from './pages/projects/projects';
import { ProjectsDetails } from './pages/project-details/projects-details';
import { ContactUs } from './pages/contact-us/contact-us';
import { Gallery } from './pages/gallery/gallery';



export const appConfig = {
  providers: [
    provideRouter([
      { path: '', component: Home },
      {path: 'about',component:About},
      {path: 'service',component:Service},
      {path: 'projects',component:Projects},
      { path: 'projects/:id', component: ProjectsDetails},
      {path: 'gallery',component:Gallery},
      {path: 'contact',component:ContactUs}

    ]),
    provideAnimations(), // ✅ Correct usage
  ],
};
