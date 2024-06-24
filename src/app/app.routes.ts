import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component'),
  },
  {
    path: 'politicas-empresa',
    loadComponent: () =>
      import('./politicas/politicas.component'),
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
];
