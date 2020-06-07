//  clod v0.1.4
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
     * @param {*} obj printed out
     * @param {Boolean} _cdump - enable or disable output
     */
    global._cdump = false;
    global.cdump = function dump(obj) {
        if (_cdump) console.log(obj);
    };

    /**
     * Checks if the input value is 'null' or 'undefined'.
     * @param {*} testing value
     * @return {Boolean} 'true' if 'value' is 'undefined' or 'null', otherwise 'false'.
     */
    function isNil(value) {
        return value == null;
    }

    /**
     * Is a given variable an object?
     * @param {*} obj - passed any var to make a check
     * @return {Boolean} 'true' if param is Object, otherwise 'false'.
     */
    function isObject(obj) {
        return (typeof obj === 'function' || paramTester('Object')(obj)) && !!obj;
    }

    /**
     * For a given array, string, or object we check if it is Empty.
     * An "empty" object has no enumerable own-properties.
     * @param {*} obj - param to be teste for
     * @return {Boolean} 'true' if param is Empty, otherwise 'false'.
     */
    function isEmpty(obj) {
        if (obj == null) return true;

        if (isArray(obj) || isString(obj) || isArguments(obj)) return obj.length === 0;

        return Object.keys(obj).length === 0;
    }

    /**
     * Internal function for string based Type testing.
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
     * Return first key of the Object
     * @param {Object} obj - get the first key
     * @return {String} - Returns first property of the object, otherwise undefined
     */
    function first(obj) {
        if (!isObject(obj) || isEmpty(obj)) return undefined;

        return Object.keys(obj)[0];
    }

    /**
     * Return Array of Object properties
     * @param {Object} obj - to get all properties from
     * @returns {Array} - array of Object properties
     */
    function keys(obj) {
        if (!isObject(obj)) return [];

        return Object.keys(obj);
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
        keys: keys
    };

    return clod;

})));
//# sourceMappingURL=clod.js.map
