import { Coin } from './coin.model';

describe('Coin', () => {
  it('should edit an instance', () => {
    expect(new Coin()).toBeTruthy();
  });
});
