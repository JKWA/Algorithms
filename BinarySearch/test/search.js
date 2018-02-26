"use strict";

var BinarySearch = require('../index.js');
var test = module.exports = {};

test['search returns position finds integer'] = function (test) {
    const searchTree = new BinarySearch();
    const array = [2,3,4,5,6,7,19,20]
    
    test.expect(1);
    test.equal(searchTree.search(array, 3), 1);
    test.done();
};

test['search returns false when no integer'] = function (test) {
    const searchTree = new BinarySearch();
    const array = [2,3,4,5,6,7,19,20]
    
    test.expect(1);
    test.equal(searchTree.search(array, 10), false);
    test.done();
};

test['search returns position finds string'] = function (test) {
    const searchTree = new BinarySearch();
    const array = ['a','b','c','d','g','q','r','v']
    
    test.expect(1);
    test.equal(searchTree.search(array, 'c'), 2);
    test.done();
};


test['search returns false when no string'] = function (test) {
    const searchTree = new BinarySearch();
    const array = ['a','b','c','d','g','q','r','v']
    
    test.expect(1);
    test.equal(searchTree.search(array, 'z'), false);
    test.done();
};



