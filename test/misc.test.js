var clod = require('../clod');
require('./mock');

describe('keys Function', () => {
    test("Obj has keys [ 'length', 'b' ]", () => {
        expect(clod.keys(obj)).toStrictEqual(['length', 'b']);
    });

    test("First returns empty array [], no keys in 'arr'", () => {
        expect(clod.keys(arr)).toStrictEqual([]);
    });
});

describe('first Function', () => {
    test("First key in the object is 'length'", () => {
        expect(clod.first(obj)).toStrictEqual('length');
    });

    test('First key is undefined, no keys in Arr', () => {
        expect(clod.first(arr)).toBe(undefined);
    });
});

describe('Random number', () => {
    test('Random number between 0 and 200 is: 155', () => {
        var random = clod.rand(200);
        expect(random).toStrictEqual(155);
    });

    test('Random num between 0 and -100 is: -77', () => {
        var random = clod.rand(-100);
        expect(random).toStrictEqual(-77);
    });

    test('Random num between 0 and -10 is: -7', () => {
        var random = clod.rand(-10);
        expect(random).toStrictEqual(-7);
    });
});

describe('Produce random string from numeric value in 3 bases', () => {
    test('Random number max length 15 is: 755392978968529', () => {
        expect(clod.random(15)).toStrictEqual('755392978968529');
    });

    test('Random number of length 12 is: 392978968529', () => {
        expect(clod.random()).toStrictEqual('392978968529');
    });

    test('Random number of length 6 is: 968529', () => {
        expect(clod.random(6)).toStrictEqual('968529');
    });

    test('Random number of length 6 base 2 is: 110011', () => {
        expect(clod.random(6, 2)).toStrictEqual('110011');
    });

    test('Random number of length 6 base 8 is: 532314', () => {
        expect(clod.random(6, 8)).toStrictEqual('532314');
    });

    test('Random number of length 6 base 16 is: 13ad33', () => {
        expect(clod.random(6, 16)).toStrictEqual('13ad33');
    });
});
