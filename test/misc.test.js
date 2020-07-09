var clod = require('../clod');
require('./mock');

describe('keys Function', () => {
    it("Obj has keys [ 'length', 'b' ]", () => {
        expect(clod.keys(obj)).toStrictEqual(['length', 'b']);
    });

    it("First returns empty array [], no keys in 'arr'", () => {
        expect(clod.keys(arr)).toStrictEqual([]);
    });
});

describe('Function for the First element in obj', () => {
    it("First key in the object is: 'length'", () => {
        expect(clod.first(obj)).toStrictEqual('length');
    });

    it('First value in array is: undefined', () => {
        expect(clod.first(arr)).toBe(undefined);
    });
});

describe('Random number', () => {
    it('Random number between 0 and 200 is: 155', () => {
        var random = clod.rand(200);
        expect(random).toStrictEqual(155);
    });

    it('Random num between 0 and -100 is: -77', () => {
        var random = clod.rand(-100);
        expect(random).toStrictEqual(-77);
    });

    it('Random num between 0 and -10 is: -7', () => {
        var random = clod.rand(-10);
        expect(random).toStrictEqual(-7);
    });
});

describe('Produce random string from numeric value in 3 bases', () => {
    it('Random number max length 15 is: 755392978968529', () => {
        expect(clod.random(15)).toStrictEqual('755392978968529');
    });

    it('Random number of length 12 is: 392978968529', () => {
        expect(clod.random()).toStrictEqual('392978968529');
    });

    it('Random number of length 6 is: 968529', () => {
        expect(clod.random(6)).toStrictEqual('968529');
    });

    it('Random number of length 6 base 2 is: 110011', () => {
        expect(clod.random(6, 2)).toStrictEqual('110011');
    });

    it('Random number of length 6 base 8 is: 532314', () => {
        expect(clod.random(6, 8)).toStrictEqual('532314');
    });

    it('Random number of length 6 base 16 is: 13ad33', () => {
        expect(clod.random(6, 16)).toStrictEqual('13ad33');
    });
});

describe('Merge Objects', () => {
    it('returns empty object', () => {
        expect(clod.merge()).toEqual({});
        expect(clod.merge([])).toEqual({});
        expect(clod.merge({})).toEqual({});
        expect(clod.merge([], {})).toEqual({});
        expect(clod.merge({}, 1)).toEqual({});
        expect(clod.merge([{}], [{ a: 1 }])).toEqual({ 0: { a: 1 } });
    });

    it('returns merged object', () => {
        expect(clod.merge({ a: 1 }, 1)).toEqual({ a: 1 });
        expect(clod.merge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
        expect(clod.merge([{ a: 1 }, { a: 3 }])).toEqual({ 0: { a: 1 }, 1: { a: 3 } });
        expect(clod.merge({ a: 1 }, { a: 3 })).toEqual({ a: 3 });
        expect(clod.merge({ a: 5 }, [], { b: 2 })).toEqual({ a: 5, b: 2 });
        expect(clod.merge({ a: 5 }, { b: 2 }, { c: 6 })).toEqual({ a: 5, b: 2, c: 6 });
        expect(clod.merge({ a: 5 }, { a: 1, b: 2 }, { b: 6, c: 4 })).toEqual({ a: 1, b: 6, c: 4 });
    });
});
