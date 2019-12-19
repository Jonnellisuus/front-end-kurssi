import { Component, OnInit } from '@angular/core';
import {CurrencyconverterService} from '../services/currencyconverter.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  getCurrency: string[];
  userInput: number;
  currencyFrom: string;
  currencyTo: string;
  currencyRate: number;
  convertedCurrency: number;

  constructor(private currencyConverter: CurrencyconverterService) { }

  ngOnInit() {
    this.currencyConverter.getData().subscribe(result => {
      this.getCurrency = Object.keys(result.rates);
      this.getCurrency.unshift('EUR');
      console.log(result);
    });
  }

  calculateResult() {
    this.currencyConverter.getResult(this.currencyFrom, this.currencyTo).subscribe(result => {
      this.currencyRate = Number(Object.values(result.rates));
      this.convertedCurrency = this.userInput * this.currencyRate;
      console.log(this.convertedCurrency);
    });
  }
}
