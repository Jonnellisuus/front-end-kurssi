import { Component, OnInit } from '@angular/core';

class Person {
  firstName: string;
  lastName: string;
  personID: string;
  eMail: string;
  userName: string;
  passWord: string;
  confirmPassword: string;
  acceptBox: boolean;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private person: Person;


  constructor() {
    this.person = new Person();
  }

  ngOnInit() {
  }

  onSave() {

  }
}
