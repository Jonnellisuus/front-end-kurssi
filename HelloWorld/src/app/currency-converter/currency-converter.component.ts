import { Component, OnInit } from '@angular/core';
import {CurrencyconverterService} from '../services/currencyconverter.service';
import {Observable} from 'rxjs';
import {Currencies} from './currencies';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  private getCurrency$: Observable<Currencies[]>;

  constructor(private currencyConverter: CurrencyconverterService) { }

  ngOnInit() {
    this.currencyConverter.getData().subscribe(result => {
      this.getCurrency$ = this.currencyConverter.getData();
      console.log(result);
    });
  }

  calculateResult() {
    // document.getElementById('convertedCurrency').innerHTML = document.getElementById('amount').value;
  }
}


