"use strict";

const QuickSort = require('../index.js');
const test = module.exports = {};

test['sort array of positive numbers'] = function (test) {
    const quickSort = new QuickSort([ 1, 10, 9, 4, 5, 2, 3 ]);
    // console.log(quickSort.sort())

    test.expect(1);
    test.deepEqual(quickSort.sort(), [ 1, 2, 3, 4, 5, 9, 10 ])
    test.done();
};

test['sort array of positive and negitive numbers'] = function (test) {
    const quickSort = new QuickSort([ 1, -10, 9, 4, 5, -2, 3 ]);
    // console.log(quickSort.sort())

    test.expect(1);
    test.deepEqual(quickSort.sort(), [ -10, -2, 1, 3, 4, 5, 9 ])
    test.done();
};


test['sort array of strings'] = function (test) {
    const quickSort = new QuickSort([ 'dog', 'cat', 'mouse' ]);
    // console.log(quickSort.sort())

    test.expect(1);
    test.deepEqual(quickSort.sort(), [ 'cat', 'dog', 'mouse' ])
    test.done();
};

