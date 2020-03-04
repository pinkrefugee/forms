import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      userName: new FormControl('Tom', [Validators.required, this.userNameValidator]),
      userEmail: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      userPhone: new FormControl('', Validators.pattern('[0-9]{10}'))
    });
  }

  submit() {
    console.log(this.myForm);
  }

  userNameValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Name') {
        return {userName: true};
    }
    return null;
}

}
