"use strict";

var Heap = require('../index.js');
var test = module.exports = {};


test['new heap has size 0'] = function (test) {
    test.expect(1);
    test.equal(new Heap().size(), 0);
    test.done();
};

test['new heap can be initialized with an array of values'] = function (test) {
    const heap = new Heap(function(x){return x;});
    heap.push(3).push(2).push(1);
  

    test.expect(1);
    test.deepEqual(heap.size(), 3);
    test.done();
};

test['heap pop equals minimum'] = function (test) {
    const heap = new Heap(function(x){return x;});
    heap.push(3).push(2).push(1);


    test.expect(3);
    test.equal(heap.pop(), 1);
    test.equal(heap.pop(), 2);
    heap.push(1)
    test.equal(heap.pop(), 1);
    test.done();
};

test['heap pop equals minimum after removal'] = function (test) {
    const heap = new Heap(function(x){return x;});
    heap.push(3).push(2).push(1);


    test.expect(2);
    test.equal(heap.pop(), 1);
    heap.remove(2)
    test.equal(heap.pop(), 3);
    test.done();
};