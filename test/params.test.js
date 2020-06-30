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

describe('Replace string with substring', () => {
    test('Remove 3 chars from the beginning of the string', () => {
        expect(clod.replaceAt(str, 3)).toBe('AAAAAAAXYZAAAAAAAAMUN');
    });

    test('Remove 3 chars from the middle of the string', () => {
        expect(clod.replaceAt(str, 3, 10)).toBe('DRFAAAAAAAAAAAAAAAMUN');
    });

    test('Remove 3 chars from the end of the string', () => {
        expect(clod.replaceAt(str, 3, 21)).toBe('DRFAAAAAAAXYZAAAAAAAA');
    });

    test('Replace 3 chars from the beginning of the string with: ---', () => {
        expect(clod.replaceAt(str, 3, 0, '---')).toBe('---AAAAAAAXYZAAAAAAAAMUN');
    });

    test('Replace 3 chars from the middle of the string with: ...', () => {
        expect(clod.replaceAt(str, 3, 10, '...')).toBe('DRFAAAAAAA...AAAAAAAAMUN');
    });

    test('Replace 3 chars from the end of the string with: +++', () => {
        expect(clod.replaceAt(str, 3, 21, '+++')).toBe('DRFAAAAAAAXYZAAAAAAAA+++');
    });
});

describe('Generate string with different sizes and characters', () => {
    test('Random string size 12, all sets', () => {
        expect(clod.rnd(12)).toBe('((((((((((((');
    });

    test('Random string size 8, out of numbers', () => {
        expect(clod.rnd(8, clod.rnd.num)).toBe('77777777');
    });

    test('Random string size 22, out of alphaLower', () => {
        expect(clod.rnd(22, clod.rnd.alphaLower)).toBe('uuuuuuuuuuuuuuuuuuuuuu');
    });

    test('Random string size 18, out of alphaUpper', () => {
        expect(clod.rnd(18, clod.rnd.alphaUpper)).toBe('UUUUUUUUUUUUUUUUUU');
    });

    test('Random string size 43, out of special', () => {
        expect(clod.rnd(35, clod.rnd.special)).toBe(':::::::::::::::::::::::::::::::::::');
    });

    test(`Random string size 17, out of chars 'AB,0X-zM' passed as param `, () => {
        expect(clod.rnd(17, [...'AB,0X-zM'])).toBe('zzzzzzzzzzzzzzzzz');
    });
});
