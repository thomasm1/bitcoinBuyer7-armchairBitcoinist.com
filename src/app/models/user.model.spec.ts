import { User } from './user.model';

describe('User.Model', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });
});
