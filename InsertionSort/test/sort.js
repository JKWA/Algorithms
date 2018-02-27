"use strict";

const InsertionSort = require('../index.js');
const test = module.exports = {};

test['sort array of positive numbers'] = function (test) {
    const insertionSort = new InsertionSort([ 1, 10, 9, 4, 5, 2, 3 ]);
    // console.log(insertionSort.sort())

    test.expect(1);
    test.deepEqual(insertionSort.sort(), [ 1, 2, 3, 4, 5, 9, 10 ])
    test.done();
};

test['sort array of positive and negitive numbers'] = function (test) {
    const insertionSort = new InsertionSort([ 1, -10, 9, 4, 5, -2, 3 ]);
    // console.log(insertionSort.sort())

    test.expect(1);
    test.deepEqual(insertionSort.sort(), [ -10, -2, 1, 3, 4, 5, 9 ])
    test.done();
};


test['sort array of strings'] = function (test) {
    const insertionSort = new InsertionSort([ 'dog', 'cat', 'mouse' ]);
    // console.log(insertionSort.sort())

    test.expect(1);
    test.deepEqual(insertionSort.sort(), [ 'cat', 'dog', 'mouse' ])
    test.done();
};

