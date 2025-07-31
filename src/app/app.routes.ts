import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'barbershop',
    loadComponent: () => import('./barbershop/barbershop').then(r => r.default),
    children: [
      {
        path: 'add_barber_service',
        title: 'Add Barber Service',
        loadComponent: () => import('./barbershop/pages/add-barber-service/add-barber-service').then(r => r.default)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'barbershop',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'barbershop',
  }
];
