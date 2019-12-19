export class Currencies {
  currencyKey: string;
  currencyValue: number;

  constructor(currencyKey: string, currencyValue: number) {
    this.currencyKey = currencyKey;
    this.currencyValue = currencyValue;
  }
}
