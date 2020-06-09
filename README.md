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
var obj = { length: 0, b: 2 };
var arr = [1, 2, 3, 4];

var Person = function (first, last) {
    this.name = {
        first: first,
        last: last,
    };
};
var Friend = new Person('Max', 'Muster');
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

## License

[ISC](LICENSE.md)
