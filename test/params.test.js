var clod = require('../clod');
require('./mock');

describe('Parameter testing Functions like (isString, siObject, isNull ...)', () => {
    test('Value "test" is String', () => {
        expect(clod.isString('test')).toBe(true);
    });
    test('Value "obj" is Object', () => {
        expect(clod.isObject(obj)).toBe(true);
    });
    test('Value 123.2 is Number', () => {
        expect(clod.isNumber(123.2)).toBe(true);
    });
    test('Value 0 is Number', () => {
        expect(clod.isNumber(0)).toBe(true);
    });
    test('Value "undefined" is Undefined', () => {
        expect(clod.isUndefined(undefined)).toBe(true);
    });
    test('Value "false" is Boolean', () => {
        expect(clod.isBoolean(false)).toBe(true);
    });
    test('Value "new Date()" is Date', () => {
        expect(clod.isDate(new Date())).toBe(true);
    });
    test('Value "Person" is Function', () => {
        expect(clod.isFunction(Person)).toBe(true);
    });
    test('Value "/[a-z]/i" is RegExp', () => {
        expect(clod.isRegExp(/[a-z]/i)).toBe(true);
    });
    test('Value "null" is Null', () => {
        expect(clod.isNull(null)).toBe(true);
    });
    test('Value "arr" is Array', () => {
        expect(clod.isArray(arr)).toBe(true);
    });

    function arg(arg1, arg2) {
        test('Value "arguments" is Arguments', () => {
            expect(clod.isArguments(arguments)).toBe(true);
        });
    }
    arg('a');
});
