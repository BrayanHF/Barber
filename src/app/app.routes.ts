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
      },
      {
        path: 'add_barber_expenses',
        title: 'Add Barber Expenses',
        loadComponent: () => import('./barbershop/pages/add-barber-expenses/add-barber-expenses').then(r => r.default)
      },
      {
        path: 'balances',
        title: 'Balances',
        loadComponent: () => import('./barbershop/pages/balances/balances').then(r => r.default)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'barbershop/add_barber_service',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'barbershop/add_barber_service',
  }
];
