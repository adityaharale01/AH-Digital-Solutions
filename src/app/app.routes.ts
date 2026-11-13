import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'AH Digital Solutions — Turning Ideas Into Digital Growth'
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
    title: 'About Us | AH Digital Solutions'
  },
  {
    path: 'services',
    loadComponent: () => import('./features/services/services.component').then(m => m.ServicesComponent),
    title: 'Services | AH Digital Solutions'
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./features/portfolio/portfolio.component').then(m => m.PortfolioComponent),
    title: 'Our Work | AH Digital Solutions'
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us | AH Digital Solutions'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
