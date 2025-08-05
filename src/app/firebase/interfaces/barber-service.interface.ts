import { Timestamp } from '@angular/fire/firestore';
import { PriceServiceInterface } from './price-service.interface';

export interface BarberServiceInterface {
  id?: string;
  date: Timestamp;
  services: PriceServiceInterface[];
  total: number;
}
