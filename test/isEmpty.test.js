var clod = require('../clod');
require('./mock');

describe('isEmpty Function', () => {
    test('Value "{}" is Empty', () => {
        expect(clod.isEmpty({})).toBe(true);
    });

    test('Object "Person" is Not Empty', () => {
        expect(clod.isEmpty(Person)).toBe(true);
    });

    test('Object "Friend" is Not Empty', () => {
        expect(clod.isEmpty(Friend)).toBe(false);
    });

    test('Array is Not Empty', () => {
        expect(clod.isEmpty(arr)).toBe(false);
    });

    test('Value "[]" is Empty', () => {
        expect(clod.isEmpty([])).toBe(true);
    });

    test('Value "" is Empty', () => {
        expect(clod.isEmpty('')).toBe(true);
    });

    test('Value "null" is Empty', () => {
        expect(clod.isEmpty(null)).toBe(true);
    });

    test('Value "obj" is Empty', () => {
        expect(clod.isEmpty(obj)).toBe(false);
    });
});
