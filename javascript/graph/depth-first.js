'use strict';

function depthFirst(graph, startNode) {
  const visitedNodes = new Set();
  function traverse(node) {
    if (!node) {
      return null;
    }
    visitedNodes.add(node);
    const neighbors = graph[node];
    for (let neighbor of neighbors) {
      if (visitedNodes.has(neighbor)) {
        continue;
      }
      traverse(neighbor);
    }
  }

  traverse(startNode);
  return visitedNodes;
}

module.exports = depthFirst;

