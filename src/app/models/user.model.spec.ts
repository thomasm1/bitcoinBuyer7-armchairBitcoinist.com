import { User } from './user.model';

describe('User.Model', () => {
  it('should edit an instance', () => {
    expect(new User()).toBeTruthy();
  });
});
