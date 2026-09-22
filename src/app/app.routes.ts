import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { pageRoutes } from './pages/pages.routes';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  ...pageRoutes,
  { path: '**', redirectTo: '' }
];
