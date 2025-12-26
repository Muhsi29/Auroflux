// app.config.ts
import { provideRouter } from '@angular/router';
import { Home } from './pages/home/home';

export const appConfig = {
  providers: [
    provideRouter([
      { path: '', component: Home },
      // add more routes here if needed
    ]),
  ],
};
