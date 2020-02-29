import { UserFirestore } from './user-firestore.model';

describe('User.Model', () => {
  it('should edit an instance', () => {
    expect(new UserFirestore()).toBeTruthy();
  });
});
