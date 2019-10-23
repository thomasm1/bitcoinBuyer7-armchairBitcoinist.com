import { TestBed } from '@angular/core/testing';

import { LambdaPriceService } from './lambda-price.service';

describe('LambdaPriceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LambdaPriceService = TestBed.get(LambdaPriceService);
    expect(service).toBeTruthy();
  });
});
