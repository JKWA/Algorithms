"use strict";

const BubbleSort = require('../index.js');
const test = module.exports = {};

test['sort array of positive numbers'] = function (test) {
    const bubbleSort = new BubbleSort([ 1, 10, 9, 4, 5, 2, 3 ]);
    // console.log(bubbleSort.sort())

    test.expect(1);
    test.deepEqual(bubbleSort.sort(), [ 1, 2, 3, 4, 5, 9, 10 ])
    test.done();
};

test['sort array of positive and negitive numbers'] = function (test) {
    const bubbleSort = new BubbleSort([ 1, -10, 9, 4, 5, -2, 3 ]);
    // console.log(bubbleSort.sort())

    test.expect(1);
    test.deepEqual(bubbleSort.sort(), [ -10, -2, 1, 3, 4, 5, 9 ])
    test.done();
};


test['sort array of strings'] = function (test) {
    const bubbleSort = new BubbleSort([ 'dog', 'cat', 'mouse' ]);
    // console.log(bubbleSort.sort())

    test.expect(1);
    test.deepEqual(bubbleSort.sort(), [ 'cat', 'dog', 'mouse' ])
    test.done();
};

