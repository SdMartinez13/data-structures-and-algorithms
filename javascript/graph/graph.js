'use strict';

class Node {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(node, weight = 0) {
    this.node = node;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(value) {
    let node = new Node(value);
    // [] value will become edges
    this.adjacencyList.set(node, []);
    return node;
  }

  addEdge(startNode, endNode, weight = 0) {
    if (!this.adjacencyList.has(startNode)) {
      throw new Error('Start Node not found');
    }
    const neighbors = this.adjacencyList.get(startNode);
    neighbors.push(new Edge(endNode, weight));
  }

  getNodes() {
    return [...this.adjacencyList.keys()];
  }

  getNeighbors(node) {
    if (!this.adjacencyList.has(node)) {
      throw new Error('Node not found');
    }
    return [...this.adjacencyList.get(node)];
  }

  size() {
    return this.adjacencyList.size;
  }
}

module.exports = Graph, Edge, Node;
