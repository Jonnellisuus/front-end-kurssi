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

  constructor(private httpClient: HttpClient) {
    this.currenciesArray = new Array<Currencies>();
  }

  getData(): Observable<any> {
    return this.httpClient.get(this.url).pipe(map(response => {
      // console.log(Object.keys(response.rates));
      // console.log(Object.values(response.rates));
      // @ts-ignore
      const objectArray = Object.entries(response.rates);
      objectArray.forEach(([key, value]) => {
        this.currenciesArray.push(new Currencies(key, Number(value)));
        console.log(key, value);
        // console.log(value);
      });
      return this.currenciesArray;
    }));
  }
}
