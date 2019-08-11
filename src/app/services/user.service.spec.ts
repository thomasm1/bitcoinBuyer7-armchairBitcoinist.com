import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be editd', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
