'use strict';

const Graph = require('./');

describe('Breadth First Tests', () => {

  it('Happy Path returns proper order with only two nodes', () => {
    let graph = new Graph();
    let A = graph.addVertex('A');
    let B = graph.addVertex('B');
    graph.addEdge(A, B);
    let test = graph.breadthFirst(A);

    expect(Array.from(test)).toEqual([{ 'value': 'A' }, { 'value': 'B' }]);
  });

  it('Returns proper collection of nodes in order', () => {
    let graph = new Graph();
    let A = graph.addVertex('A');
    let B = graph.addVertex('B');
    let C = graph.addVertex('C');
    let D = graph.addVertex('D');
    let E = graph.addVertex('E');
    let F = graph.addVertex('F');
    graph.addEdge(A, B);
    graph.addEdge(B, C);
    graph.addEdge(B, D);
    graph.addEdge(C, D);
    graph.addEdge(C, E);
    graph.addEdge(D, F);
    graph.addEdge(E, F);
    let test = graph.breadthFirst(A);

    expect(Array.from(test)).toEqual([{ 'value': 'A' }, { 'value': 'B' }, { 'value': 'C' }, { 'value': 'D' }, { 'value': 'E' }, { 'value': 'F' }]);
  });

  it('Expected Failure returns null if no Node added', () => {
    let graph = new Graph();

    expect(graph.breadthFirst()).toEqual(null);
  });

});
