var clod = require('../clod');
require('./mock');

describe('isEmpty Function', () => {
    it('Value "{}" is Empty', () => {
        expect(clod.isEmpty({})).toBe(true);
    });

    it('Object "Person" is Not Empty', () => {
        expect(clod.isEmpty(Person)).toBe(true);
    });

    it('Object "Friend" is Not Empty', () => {
        expect(clod.isEmpty(Friend)).toBe(false);
    });

    it('Array is Not Empty', () => {
        expect(clod.isEmpty(arr)).toBe(false);
    });

    it('Value "[]" is Empty', () => {
        expect(clod.isEmpty([])).toBe(true);
    });

    it('Value "" is Empty', () => {
        expect(clod.isEmpty('')).toBe(true);
    });

    it('Value "null" is Empty', () => {
        expect(clod.isEmpty(null)).toBe(true);
    });

    it('Value "obj" is Empty', () => {
        expect(clod.isEmpty(obj)).toBe(false);
    });
});
