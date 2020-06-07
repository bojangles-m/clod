obj = { length: 0, b: 2 };
arr = [1, 2, 3, 4];

Person = function (first, last) {
    this.name = {
        first: first,
        last: last,
    };
};
Friend = new Person('Max', 'Muster');
