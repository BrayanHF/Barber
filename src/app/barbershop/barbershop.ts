import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../shared/componets/header/header';

@Component({
  selector: 'app-barbershop',
  imports: [
    RouterOutlet,
    Header
  ],
  templateUrl: './barbershop.html',
})
export default class Barbershop {


}
