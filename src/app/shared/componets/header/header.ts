import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'shared-header',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.html',
})
export class Header {

  public navigationsLinks = [
    {
      title: 'Servicio',
      path: '/barbershop/add_barber_service'
    },
    {
      title: 'Gastos',
      path: '/barbershop/add_barber_expenses'
    },
    {
      title: 'Balances',
      path: '/barbershop/balances'
    }

  ]

}
