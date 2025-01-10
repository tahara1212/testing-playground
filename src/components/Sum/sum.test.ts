import { sum } from './sum';

describe('sum 関数のテスト', () => {
  it('1 + 2 = 3', () => {
    // Assert
    expect(sum(1, 2)).toBe(3);
  });
});
