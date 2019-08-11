import { TestBed } from '@angular/core/testing';

import { CoinService } from './coin.service';

describe('CoinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be editd', () => {
    const service: CoinService = TestBed.get(CoinService);
    expect(service).toBeTruthy();
  });
});
