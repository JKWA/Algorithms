"use strict";

const BinarySearchTree = require('../index.js');
const test = module.exports = {};

test['test tree if true'] = function (test) {
    const tree = new BinarySearchTree();
    tree.add(3).add(2).add(1).add(6).add(9).add(7).add(8);
    test.expect(1);
    test.equal(tree.contains(6), true)
    test.done();
};

test['test tree if false'] = function (test) {
    const tree = new BinarySearchTree();
    tree.add(3).add(2).add(1).add(6).add(9).add(7).add(8);
    test.expect(1);
    test.equal(tree.contains(13), false)
    test.done();
};

test['test tree after add'] = function (test) {
    const tree = new BinarySearchTree();
    tree.add(3).add(2).add(1).add(6).add(9).add(7).add(8);
    test.expect(2);
    test.equal(tree.contains(13), false);
    tree.add(13);
    test.equal(tree.contains(13), true);
    test.done();
};

test['test print deep first log'] = function (test) {
    const tree = new BinarySearchTree();
    const testArray = [5,6,7,3,4,8,2,9];
    const correct = [5,3,2,4,6,7,8,9];
    const testReturn = [];
    for (var i=0; i<testArray.length; i++){
        tree.add(testArray[i])
    }

    tree.depthFirstLog (callback)
    
    function callback(item){

        testReturn.push(item)
    }
    
    test.expect(1);
    test.deepEqual(correct, testReturn);

    test.done();
};


test['test min value'] = function (test) {
    const tree = new BinarySearchTree();
    tree.add(3).add(2).add(10).add(6).add(9).add(7).add(8);
    test.expect(1);
    test.equal(tree.getMinValue(), 2)
    test.done();
};

test['test max value'] = function (test) {
    const tree = new BinarySearchTree();
    tree.add(3).add(2).add(10).add(6).add(9).add(7).add(8);
    test.expect(1);
    test.equal(tree.getMaxValue(), 10)
    test.done();
};










