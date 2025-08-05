import { Component, inject, signal } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-barber-service',
  imports: [],
  templateUrl: './add-barber-service.html',
})
export default class AddBarberService {

  private fb = inject(FormBuilder);
  public services = [ 'Motilada', 'Barba', 'Cejas' ];

  public form = this.fb.group({
    services: this.fb.array([]),
    default_price: true,
    total: 0
  });

  public onServiceCheckBoxChange(event: any) {
    const services = this.form.get('services') as FormArray;

    if (event.target.checked) {
      services.push(this.fb.control(event.target.value));
    } else {
      const index = services.controls.findIndex(control => control.value === event.target.value);
      services.removeAt(index);
    }
  }

}
