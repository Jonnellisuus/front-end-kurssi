export class Currencies {
  rate: string;
  base: string;
  date: string;

  constructor(rate?: string, base?: string, date?: string) {
    this.rate = rate;
    this.base = base;
    this.date = date;
  }
}
