"use strict";

const SelectionSort = require('../index.js');
const test = module.exports = {};

test['sort array of positive numbers'] = function (test) {
    const selectionSort = new SelectionSort([ 1, 10, 9, 4, 5, 2, 3 ]);
    // console.log(selectionSort.sort())

    test.expect(1);
    test.deepEqual(selectionSort.sort(), [ 1, 2, 3, 4, 5, 9, 10 ])
    test.done();
};

test['sort array of positive and negitive numbers'] = function (test) {
    const selectionSort = new SelectionSort([ 1, -10, 9, 4, 5, -2, 3 ]);
    // console.log(selectionSort.sort())

    test.expect(1);
    test.deepEqual(selectionSort.sort(), [ -10, -2, 1, 3, 4, 5, 9 ])
    test.done();
};


test['sort array of strings'] = function (test) {
    const selectionSort = new SelectionSort([ 'dog', 'cat', 'mouse' ]);
    // console.log(selectionSort.sort())

    test.expect(1);
    test.deepEqual(selectionSort.sort(), [ 'cat', 'dog', 'mouse' ])
    test.done();
};

