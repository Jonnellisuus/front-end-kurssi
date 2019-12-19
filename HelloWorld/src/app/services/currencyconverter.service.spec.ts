import { TestBed } from '@angular/core/testing';

import { CurrencyconverterService } from './currencyconverter.service';

describe('CurrencyconverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrencyconverterService = TestBed.get(CurrencyconverterService);
    expect(service).toBeTruthy();
  });
});
