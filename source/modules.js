/**
 * Simple Dump function to write on output
 * Used for development
 *
 * @param {*} obj printed out
 * @param {Boolean} _cdump - enable or disable output
 */
global._cdump = false;
global.cdump = function dump(obj) {
    if (_cdump) console.log(obj);
};

/**
 * Checks if the input value is 'null' or 'undefined'.
 *
 * @param {*} testing value
 * @return {Boolean} 'true' if 'value' is 'undefined' or 'null', otherwise 'false'.
 */
export function isNil(value) {
    return value == null;
}

/**
 * Is a given variable an object?
 *
 * @param {*} obj - passed any var to make a check
 * @return {Boolean} 'true' if param is Object, otherwise 'false'.
 */
export function isObject(obj) {
    return (typeof obj === 'function' || paramTester('Object')(obj)) && !!obj;
}

/**
 * For a given array, string, or object we check if it is Empty.
 * An "empty" object has no enumerable own-properties.
 *
 * @param {*} obj - param to be teste for
 * @return {Boolean} 'true' if param is Empty, otherwise 'false'.
 */
export function isEmpty(obj) {
    if (obj == null) return true;

    if (isArray(obj) || isString(obj) || isArguments(obj)) return obj.length === 0;

    return Object.keys(obj).length === 0;
}

/**
 * Internal function for string based Type testing.
 *
 * @param {String} name - Type of the param
 * @returns {Boolean} 'true' if param is the Type passed to the function, otherwise 'false'.
 */
function paramTester(name) {
    return function (obj) {
        return toString.call(obj) === `[object ${name}]`;
    };
}

/**
 * Add some isType methods.
 */
export var isArguments = paramTester('Arguments');
export var isString = paramTester('String');
export var isModule = paramTester('Module');
export var isFunction = paramTester('Function');
export var isRegExp = paramTester('RegExp');
export var isNumber = paramTester('Number');
export var isNull = paramTester('Null');
export var isBoolean = paramTester('Boolean');
export var isDate = paramTester('Date');
export var isUndefined = paramTester('Undefined');
export var isArray = Array.isArray;

/**
 * Return first key of the Object
 *
 * @param {Object} obj - get the first key
 * @return {String} - Returns first property of the object, otherwise undefined
 */
export function first(obj) {
    if (!isObject(obj) || isEmpty(obj)) return undefined;

    return Object.keys(obj)[0];
}

/**
 * Return Array of Object properties
 *
 * @param {Object} obj - to get all properties from
 * @returns {Array} - array of Object properties
 */
export function keys(obj) {
    if (!isObject(obj)) return [];

    return Object.keys(obj);
}

/**
 * From numeric value produces a random string of char and numbers of
 * max length. Radix is between 2 and 36.
 *
 * @param {Number} max - max length of value is 15, default max is 12
 * @param {Number} redix - Base to use for representing a numeric value
 * @return {String} - random string of char and numbers
 */
export function random(max, radix) {
    max = max && (max > 0 || max <= 15) ? parseInt(max) : 12;
    return Math.random()
        .toString(radix || 10)
        .substr(-max);
}

/**
 * Calculate random integer between 0 and negative or positive Number.
 *
 * @param {Number} num - positive or negative
 * @return {Integer} - Get random integer
 */
export function rand(num) {
    var neg = num < 0 ? -1 : 1;
    return neg * Math.floor(Math.random() * Math.floor(Math.abs(num)));
}

/**
 * Removes portion of string and replace it with a new string.
 * Use it only if you need to replace substring between two indexes!!!
 *
 * @param {String} str - original string
 * @param {Number} i - index from which part to remove the string
 * @param {Number} k - length of removed substirng
 * @param {String} r - replacement string
 * @returns {String} - substring
 */
export function replaceAt(str, k = 0, i = 0, r = '') {
    return [str.substring(0, i), r, str.substring(i + k)].join('');
}

/**
 * Random srting of a certain size defined as parameter
 *
 * @param {Number} len - size of the string
 * @param {Array} set - Set of the character a string can be formed from
 * @returns {String}
 */
export const rnd = (() => {
    const sets = {
        num: [...`0123456789`],
        alphaLower: [...`abcdefghijklmnopqrstuvwxyz`],
        alphaUpper: [...`ABCDEFGHIJKLMNOPQRSTUVWXYZ`],
        special: [...`~!@#$%^&*()_+-=[]\{}|'";:,./<>?`],
    };

    function* itr(len, set) {
        if (set.length < 1) set = Object.values(sets).flat();
        for (let i = 0; i < len; i++) yield set[(Math.random() * set.length) | 0];
    }

    return Object.assign((len, ...set) => [...itr(len, set.flat())].join(''), sets);
})();
