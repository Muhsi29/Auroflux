import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';

export const appConfig = {
  providers: [
    provideRouter([
      { path: 'home', component: Home },
      {path: 'about',component:About}
    ]),
    provideAnimations(), // ✅ Correct usage
  ],
};
