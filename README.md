# Clod

Is a utility library for JavaScript that provides support for the basic functions or functions that are most used in one project, like (isEmpty, isNil, isObject, isArray ...) without extending any core JavaScript objects.

Supports ECMAScript 6+ !!!

Adding functionality continues!

Note: The documentation uses yarn commands, but npm will also work. You can learn about Yarn [here](https://classic.yarnpkg.com/en).

## Install

```sh
$ yarn add clod
```

## Usage

Import into the script

```js
var clod = require('clod');

// OR
import clod from 'clod';
```

### Modules

Variables used in the examples.

```js
var obj = {length: 0, b: 2};
var arr = [1, 2, 3, 4];

var Person = function (first, last) {
  this.name = {
    first: first,
    last: last,
  };
};
var Friend = new Person('Max', 'Muster');

var str = 'DRFAAAAAAAXYZAAAAAAAAMUN';
```

#### cap

```js
clod.cap('only first letter or'); // Only first letter or
clod.cap('or every word', true); // Or Every Word
```

#### isNil

```js
clod.isNil(null); // true
clod.isNil(undefined); // true
clod.isNil(0); // false
clod.isNil([]); // false
```

#### isEmpty

```js
clod.isEmpty({}); // true
clod.isEmpty(Person); // true
clod.isEmpty(Friend); // false
clod.isEmpty(arr); // false
clod.isEmpty([]); // true
clod.isEmpty(''); // true
clod.isEmpty(null); // true
clod.isEmpty(obj); // false
```

#### Parameter testing functions

```js
clod.isString('test'); // true
clod.isObject(obj); // true
clod.isNumber(123.2); // true
clod.isNumber(0); // true
clod.isNull(null); // true
clod.isUndefined(undefined); // true
clod.isBoolean(false); // true
clod.isDate(new Date()); // true
clod.isFunction(Person); // true
clod.isRegExp(/[a-z]/i); // true
clod.isArray(arr); // true
```

#### keys

```js
clod.keys(obj); // [ 'length', 'b' ]
clod.keys(arr); // []
```

#### first

```js
clod.first(obj); // length
clod.first(arr); // undefined
```

#### rand

```js
clod.rand(200); // 155
clod.rand(-100); // -77
clod.rand(-10); // -7
```

#### random

```js
clod.random(); // length 12:  392978968529
clod.random(15); // max length: 755392978968529
clod.random(6); // 968529
clod.random(6, 2); // base 2: 110011
clod.random(6, 8); // base 8: 532314
clod.random(6, 16); // base 16: 13ad33
```

#### replaceAt

```js
// str = DRFAAAAAAAXYZAAAAAAAAMUN

// Removes substring at different indexes
clod.replaceAt(str, 3); // AAAAAAAXYZAAAAAAAAMUN
clod.replaceAt(str, 3, 10); // DRFAAAAAAAAAAAAAAAMUN
clod.replaceAt(str, 3, 21); // DRFAAAAAAAXYZAAAAAAAA

// Replaces substring at different indexes
clod.replaceAt(str, 3, 0, '---'); // ---AAAAAAAXYZAAAAAAAAMUN
clod.replaceAt(str, 3, 10, '...'); // DRFAAAAAAA...AAAAAAAAMUN
clod.replaceAt(str, 3, 21, '+++'); // DRFAAAAAAAXYZAAAAAAAA+++
```

#### rnd

```js
// Used all sets of characters
clod.rnd(12); // J<^kl)OS+{Yv

// Used only numbers
clod.rnd(8, clod.rnd.num); // 84404908

// Used only lower alpha
clod.rnd(22, clod.rnd.alphaLower); // xkrjbluejcvtbuymuxzbjp

// Used only upper alpha
clod.rnd(18, clod.rnd.alphaUpper); // LRERONFKSEVBUFSCJR

// Used only special characters
clod.rnd(35, clod.rnd.special); // &;/{}?["/_[^^#^#_{$&=]&%_!?">=(.-.*

// Used random input characters
clod.rnd(17, [...'AB,0X-zM']); // ,B,,A,XMMMXMM,,X
```

#### merge

```js
// Merge two or more Objects into one
clod.merge({}, 1); // {}
clod.merge({a: 1}, 1); // { a: 1 }
clod.merge({a: 5}, {b: 2}); // { a: 5, b: 2 }
clod.merge({a: 5}, {a: 1, b: 2}, {b: 6, c: 4}); // { a: 1, b: 6, c: 4 }
clod.merge([{a: 1}, {a: 3}]); // { 0: { a: 1 }, 1: { a: 3 } }
```

## License

[ISC](LICENSE.md)
