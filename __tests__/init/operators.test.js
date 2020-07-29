import { operators } from '../../src/js/libs';

describe('Operators', () => {
  it('should return a object', () => {
    expect(operators).toEqual(expect.any(Object));
  });
});
