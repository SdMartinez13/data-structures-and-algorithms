'use strict';

const Graph = require('./graph.js');

describe('Graph', () => {
  it('should be able to add a node to the graph', () => {
    let graph = new Graph();
    let nodeA = graph.addNode('A');
    expect(graph.getNodes()).toEqual([nodeA]);
  });

  it('should be able to add an edge to the graph', () => {
    let graph = new Graph();
    let nodeA = graph.addNode('A');
    let nodeB = graph.addNode('B');
    graph.addEdge(nodeA, nodeB);
    let neighbors = graph.getNeighbors(nodeA);
    expect(neighbors[0].node).toEqual({ value: 'B' });
  });

  it('should be able to return a collection of all nodes in the graph', () => {
    let graph = new Graph();
    let nodeA = graph.addNode('A');
    let nodeB = graph.addNode('B');
    let nodeC = graph.addNode('C');
    let nodeD = graph.addNode('D');
    let nodes = graph.getNodes();
    expect(nodes).toEqual([nodeA, nodeB, nodeC, nodeD]);
  });

  it('should be able to return a collection of all neighbors of a given node', () => {
    let graph = new Graph();
    let nodeA = graph.addNode('A');
    let nodeB = graph.addNode('B');
    let nodeC = graph.addNode('C');
    let nodeD = graph.addNode('D');
    graph.addEdge(nodeA, nodeB);
    graph.addEdge(nodeA, nodeC);
    graph.addEdge(nodeA, nodeD);
    let neighbors = graph.getNeighbors(nodeA);
    expect(neighbors[0].node).toEqual({ value: 'B' });
    expect(neighbors[1].node).toEqual({ value: 'C' });
    expect(neighbors[2].node).toEqual({ value: 'D' });
  });

  it('should be able to return a nodes neighbors with weights included', () => {
    let graph = new Graph();
    let nodeA = graph.addNode('A');
    let nodeB = graph.addNode('B');
    let nodeC = graph.addNode('C');
    let nodeD = graph.addNode('D');
    graph.addEdge(nodeA, nodeB, 1);
    graph.addEdge(nodeA, nodeC, 2);
    graph.addEdge(nodeA, nodeD, 3);
    let neighbors = graph.getNeighbors(nodeA);
    expect(neighbors[0].weight).toEqual(1);
    expect(neighbors[1].weight).toEqual(2);
    expect(neighbors[2].weight).toEqual(3);
  });

  it('should be able to return the proper size of the graph', () => {
    let graph = new Graph();
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');
    expect(graph.size()).toEqual(4);
  });

  it('should be able to return a graph with only one node and one edge', () => {
    let graph = new Graph();
    let nodeA = graph.addNode('A');
    graph.addEdge(nodeA);
    expect(graph.getNodes()).toEqual([nodeA]);
    let neighbors = graph.getNeighbors(nodeA);
    expect(neighbors[0].node).toEqual(undefined);
    let nodes = graph.getNodes();
    expect(nodes).toEqual([nodeA]);
  });
});
