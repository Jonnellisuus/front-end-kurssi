import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  buttons: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '='];
  result: string = '';
  private prevValue: string = '';
  private nextValue: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  addValue(value: string) {
    if (this.result !== '') {
      this.prevValue = this.nextValue;
      this.nextValue = value;
    }

    if (value === 'C') {
      this.result = '';

    } else if (value === '=') {
      // tslint:disable-next-line:no-eval
      this.result = eval(this.result);

    } else {
      this.result += value;
      this.prevValue = this.result[this.result.length - 1];
      this.nextValue = this.result[this.result.length - 2];

      if (this.prevValue === '/' && this.nextValue === '/' || this.prevValue === '/' && this.nextValue === '*' ||
        this.prevValue === '/' && this.nextValue === '+' || this.prevValue === '/' && this.nextValue === '-' ||
        this.prevValue === '*' && this.nextValue === '/' || this.prevValue === '*' && this.nextValue === '*' ||
        this.prevValue === '*' && this.nextValue === '+' || this.prevValue === '*' && this.nextValue === '-' ||
        this.prevValue === '+' && this.nextValue === '/' || this.prevValue === '+' && this.nextValue === '*' ||
        this.prevValue === '+' && this.nextValue === '+' || this.prevValue === '+' && this.nextValue === '-' ||
        this.prevValue === '-' && this.nextValue === '/' || this.prevValue === '-' && this.nextValue === '*' ||
        this.prevValue === '-' && this.nextValue === '+' || this.prevValue === '-' && this.nextValue === '-') {

        this.result = this.result.substring(0, this.result.length - 1);
      }
    }
  }
}
