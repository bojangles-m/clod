var clod = require('../clod');

describe('isNill Function', () => {
    test('Value "null" is Nil', () => {
        expect(clod.isNil(null)).toBe(true);
    });

    test('Value "undefined" is Nil', () => {
        expect(clod.isNil(undefined)).toBe(true);
    });

    test('Value "0" is Not Nil', () => {
        expect(clod.isNil(0)).toBe(false);
    });

    test('Value "[]" is Not Nil', () => {
        expect(clod.isNil([])).toBe(false);
    });
});
