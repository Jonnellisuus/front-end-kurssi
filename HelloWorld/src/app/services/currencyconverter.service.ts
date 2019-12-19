import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Currencies} from '../currency-converter/currencies';

@Injectable({
  providedIn: 'root'
})
export class CurrencyconverterService {
  currenciesArray: Array<Currencies>;
  url = 'https://api.exchangeratesapi.io/latest';
  baseCurrency = 'https://api.exchangeratesapi.io/latest?base=';
  currencySymbols = '&symbols=';

  constructor(private httpClient: HttpClient) {
    this.currenciesArray = new Array<Currencies>();
  }

  getData(): Observable<any> {
    return this.httpClient.get(this.url).pipe(map(response => {
      return response as Currencies;
    }));
  }

  getResult(baseCurrency, currencySymbols): Observable<any> {
    return this.httpClient.get(this.baseCurrency + baseCurrency + this.currencySymbols + currencySymbols).pipe(map(response => {
      return response;
    }));
  }
}
