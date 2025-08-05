import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { BarberServiceInterface } from '../interfaces/barber-service.interface';

@Injectable({
  providedIn: 'root'
})
export class BarberFirebaseService {

  private firebase = inject(Firestore);
  private collectionRef = collection(this.firebase, 'barbers');

  public saveBarberService(barberService: BarberServiceInterface) {
    return from(addDoc(this.collectionRef, barberService))
  }

  public getBarberServices() {
    return collectionData(this.collectionRef, { idField: 'id' }) as Observable<BarberServiceInterface[]>;
  }

}
