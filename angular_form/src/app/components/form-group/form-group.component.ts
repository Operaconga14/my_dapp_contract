import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent {
  
  alertMessages = {
    "firstname": {
      "required": 'first name is required',
      "minlength": 'this field is too short',
    },
    "lastname": {
      "required": 'last name is required',
      "minlength": 'last name too short',
    },
    "email": {
      "required": 'email is required',
      "invalid": 'email is invalid format'
    },
    "age": {
      "required": 'age is required',
      "min": 'the minimum age is 18',
      "max": 'the maximum age is 60'
    }
  }

  userProfileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(60)])
  })

  get FirstName(): FormControl {
    return this.userProfileForm.get('firstName') as FormControl;
  }

  get LastName(): FormControl {
    return this.userProfileForm.get('lastName') as FormControl;
  }

  get Email(): FormControl {
    return this.userProfileForm.get('email') as FormControl;
  }

  get Age(): FormControl {
    return this.userProfileForm.get('age') as FormControl;
  }

  onSubmit() {
    console.warn(this.userProfileForm.value);
    // To Print only one Value of a form group
    // console.log(this.userProfileForm.controls['firstName'].value);
    // Or
    // console.log(this.userProfileForm.get('firstName'));
  }
}
