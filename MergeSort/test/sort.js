"use strict";

const MergeSort = require('../index.js');
const test = module.exports = {};

test['add items to array'] = function (test) {
    const mergeSort = new MergeSort([1,10]);
    mergeSort.addItem(6).addItem(4);

    test.expect(1);
    test.deepEqual(mergeSort.getArray(), [1,10,6,4])
    test.done();
};

test['add arrays to array'] = function (test) {
    const mergeSort = new MergeSort([1,10]);
    mergeSort.addArray([6,2]).addArray([4,5]);
    test.expect(1);
    test.deepEqual(mergeSort.getArray(), [1,10,6,2,4,5])
    test.done();
};

test['add items and arrays to array'] = function (test) {
    const mergeSort = new MergeSort([1,10]);
    mergeSort.addItem(6).addItem(2).addArray([4,5]);
    test.expect(1);
    test.deepEqual(mergeSort.getArray(), [1,10,6,2,4,5])
    test.done();
};

test['alpha sort array'] = function (test) {
    const mergeSort = new MergeSort([1, 10]);
    mergeSort.addItem(100).addItem(2).addArray([1000, 200]);
    mergeSort.sort();
    test.expect(1);
    test.deepEqual(mergeSort.getArray(), [1, 2, 10, 100, 200, 1000])
    test.done();
};

test['sort array with strings'] = function (test) {
    const mergeSort = new MergeSort(['a', 'b']);
    mergeSort.addItem(100).addItem(2).addArray([1000,200]);
    test.expect(1);
    test.deepEqual(mergeSort.sort(), [2, 100, 200, 1000, 'a', 'b'])
    test.done();
};

test['sort array, add numbers, resort'] = function (test) {
    const mergeSort = new MergeSort([10, 4]);
    mergeSort.addItem(100).addItem(2).addArray([1000, 200]);
    test.expect(2);
    test.deepEqual(mergeSort.sort(), [2, 4, 10, 100, 200, 1000])
    mergeSort.addArray([5,3,9])
    mergeSort.sort()
    // mergeSort.print();
    test.deepEqual(mergeSort.getArray(), [2, 3, 4, 5, 9, 10, 100, 200, 1000])
    test.done();
};





