import { operators } from '../../src/js/libs';

const { isApprovedTag, find } = operators;

describe('Operators', () => {
  describe('isApprovedTag [FUNCTION]', () => {
    it('should return <TRUE> if tag is approveded', () => {
      const tagIsApproved = isApprovedTag('DIV');
      expect(tagIsApproved).toBe(true);
    });

    it('should return <TRUE> if tag is not approveded', () => {
      const tagIsApproved = isApprovedTag('ARTICLE');
      expect(tagIsApproved).toBe(false);
    });
  });
  describe('find [FUNCTION]', () => {
    it('should return a <STRING> if findend the word', () => {
      const data = [{ word: 'world' }, { word: 'green' }];
      const resultQuery = find(data, 'world');

      expect(resultQuery).toEqual(expect.any(String));
    });
    it('should return a <NULL> if not finded the word', () => {
      const data = [{ word: 'world' }, { word: 'green' }];
      const resultQuery = find(data, 'banana');

      expect(resultQuery).toBe(null);
    });
  });
});
