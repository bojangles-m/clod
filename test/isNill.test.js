var clod = require('../clod');

describe('isNill Function', () => {
    it('Value "null" is Nil', () => {
        expect(clod.isNil(null)).toBe(true);
    });

    it('Value "undefined" is Nil', () => {
        expect(clod.isNil(undefined)).toBe(true);
    });

    it('Value "0" is Not Nil', () => {
        expect(clod.isNil(0)).toBe(false);
    });

    it('Value "[]" is Not Nil', () => {
        expect(clod.isNil([])).toBe(false);
    });
});
