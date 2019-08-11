import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be editd', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
});
