//  clod v0.2.3
//  https://github.com/bojangles-m/clod
//  (c) 2020-2020 Bojan Mazej
//  License: ISC

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, (function () {
    var current = global.clod;
    var exports = global.clod = factory();
    exports.noConflict = function () { global.clod = current; return exports; };
  }()));
}(this, (function () {
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
  function isNil(value) {
    return value == null;
  }

  /**
   * Is a given variable an object?
   *
   * @param {*} obj - passed any var to make a check
   * @return {Boolean} 'true' if param is Object, otherwise 'false'.
   */
  function isObject(obj) {
    return (typeof obj === 'function' || paramTester('Object')(obj)) && !!obj;
  }

  /**
   * For a given array, string, or object we check if it is Empty.
   * An "empty" object has no enumerable own-properties.
   *
   * @param {*} obj - param to be teste for
   * @return {Boolean} 'true' if param is Empty, otherwise 'false'.
   */
  function isEmpty(obj) {
    if (obj == null) return true;

    if (isArray(obj) || isString(obj) || isArguments(obj))
      return obj.length === 0;

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
  var isArguments = paramTester('Arguments');
  var isString = paramTester('String');
  var isModule = paramTester('Module');
  var isFunction = paramTester('Function');
  var isRegExp = paramTester('RegExp');
  var isNumber = paramTester('Number');
  var isNull = paramTester('Null');
  var isBoolean = paramTester('Boolean');
  var isDate = paramTester('Date');
  var isUndefined = paramTester('Undefined');
  var isArray = Array.isArray;

  /**
   * Return first property of the Object
   *
   * @param {Object} obj - get the first key
   * @return {String} - Returns first property of the object, otherwise undefined
   */
  function first(obj) {
    if (!isObject(obj) || isEmpty(obj)) return undefined;
    return Object.keys(obj)[0];
  }

  /**
   * Return Array of Object properties
   *
   * @param {Object} obj - to get all properties from
   * @returns {Array} - array of Object properties
   */
  function keys(obj) {
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
  function random(max, radix) {
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
  function rand(num) {
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
  function replaceAt(str, k = 0, i = 0, r = '') {
    return [str.substring(0, i), r, str.substring(i + k)].join('');
  }

  /**
   * Random srting of a certain size defined as parameter
   *
   * @param {Number} len - size of the string
   * @param {Array} set - Set of the character a string can be formed from
   * @returns {String}
   */
  const rnd = (() => {
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

    return Object.assign(
      (len, ...set) => [...itr(len, set.flat())].join(''),
      sets,
    );
  })();

  /**
   * Merge - murge multiple object into one
   * @params {Object} multiple numbers of object
   * @returns Merged object
   */
  function merge() {
    if (!isArguments(arguments) || isEmpty(arguments)) return {};

    return Object.assign({}, ...arguments);
  }

  /**
   * Capitalize string
   * Only First letter or every Word in the string
   * @param {String} str - string to Capitalize
   * @param {Boolean} all - First leter or every first letter of the word in the string
   */
  function cap(str, all = false) {
    const one = s => s.replace(/^./, s[0].toUpperCase());
    return all ? str.split(' ').map(one).join(' ') : one(str);
  }

  var clod = {
    __proto__: null,
    isNil: isNil,
    isObject: isObject,
    isEmpty: isEmpty,
    isArguments: isArguments,
    isString: isString,
    isModule: isModule,
    isFunction: isFunction,
    isRegExp: isRegExp,
    isNumber: isNumber,
    isNull: isNull,
    isBoolean: isBoolean,
    isDate: isDate,
    isUndefined: isUndefined,
    isArray: isArray,
    first: first,
    keys: keys,
    random: random,
    rand: rand,
    replaceAt: replaceAt,
    rnd: rnd,
    merge: merge,
    cap: cap
  };

  return clod;

})));
//# sourceMappingURL=clod.js.map
