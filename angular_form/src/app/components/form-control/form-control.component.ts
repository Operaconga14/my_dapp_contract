import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent {

  emailAddress = new FormControl('');

  updateEmail() {
    this.emailAddress.setValue('myth@gmail.com');
  }

}
