import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

export class PasswordValidation {

  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('passWord').value;
    let confirmPassword = AC.get('confirmPassword').value;
    if (password !== confirmPassword) {
      console.log('false');
      AC.get('confirmPassword').setErrors({MatchPassword: true});
    } else {
      console.log('true');
      return null;
    }
  }
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-öA-Ö]*')]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-öA-Ö]*')]],
      personID: ['', [Validators.required, Validators.minLength(11), Validators.pattern
      ('^(0[1-9]|[12]\\d|3[01])(0[1-9]|1[0-2])([5-9]\\d\\+|\\d\\d-|[01]\\dA)\\d{3}[\\dA-Z]$')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]],
      userName: ['', [Validators.required, Validators.minLength(6)]],
      passWord: ['', [Validators.required, Validators.minLength(10), Validators.pattern
      ('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
      termsAndCondition: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: PasswordValidation.MatchPassword
    });
  }

  get firstName() {
    return this.profileForm.get('firstName');
  }

  get lastName() {
    return this.profileForm.get('lastName');
  }

  get personID() {
    return this.profileForm.get('personID');
  }

  get email() {
    return this.profileForm.get('email');
  }

  get userName() {
    return this.profileForm.get('userName');
  }

  get passWord() {
    return this.profileForm.get('passWord');
  }

  get confirmPassword() {
    return this.profileForm.get('confirmPassword');
  }

  get termsAndCondition() {
    return this.profileForm.get('termsAndCondition');
  }

  onSave() {

  }
}
