"use strict";

const Graph = require('../index.js');
const test = module.exports = {};

test['test create graph with chaining'] = function (test) {
    const graph = new Graph();
    graph.addVertex(1)
        .addVertex(2)
        .addVertex(3)
        .addVertex(4)
        .addVertex(5)
        .addVertex(6)
        .addVertex(7)
   
    // graph.print();

    test.expect(1);
    test.equal(graph.size(), 7)
    test.done();
};

test['test size updates correctly'] = function (test) {
    const graph = new Graph();
    graph.addVertex(1)
        .addVertex(2)
        .addVertex(3)
        .addVertex(4)
        .addVertex(5);

    test.expect(2);
    test.equal(graph.size(), 5)
    
    graph.addVertex(6).addVertex(7);
    test.equal(graph.size(), 7);

    test.done();
};


test['test create edges'] = function (test) {
    const graph = new Graph();
    graph.addVertex(1)
        .addVertex(2)
        .addVertex(3)
        .addVertex(4)
        .addVertex(5)
        .addVertex(6);
    
    graph.addEdge(1, 2)
        .addEdge(1, 5)
        .addEdge(2, 3)
        .addEdge(2, 5)
        .addEdge(3, 4)
        .addEdge(4, 5)
        .addEdge(4, 6);

    // graph.print();
    test.expect(1);
    test.equal(graph.relations(), 7)
    test.done();
};

test['test follow path'] = function (test) {
    const graph = new Graph();
    graph.addVertex(1)
        .addVertex(2)
        .addVertex(3)
        .addVertex(4)
        .addVertex(5)
        .addVertex(6)
        .addVertex(7);
    
    graph.addEdge(1, 2)
        .addEdge(1, 5)
        .addEdge(2, 3)
        .addEdge(2, 5)
        .addEdge(3, 4)
        .addEdge(4, 5)
        .addEdge(4, 6);

    test.expect(2);
   
    test.equal(graph.pathFromTo(2, 7), false);
    graph.addEdge(6, 7);

    test.equal(graph.pathFromTo(2, 7), '2-3-4-6-7')
    test.done();
};





