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
