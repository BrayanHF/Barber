import { Timestamp } from '@angular/fire/firestore';
import { PriceService } from './PriceService';

export interface BarberService {
  id?: string;
  date: Timestamp;
  services: PriceService[];
  total: number;
}
