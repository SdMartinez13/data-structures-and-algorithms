'use strict';

const depthFirst = require('../depthFirst');

describe('depthFirst', () => {
  it('should return a set of all nodes visited', () => {
    const graph = {
      a: ['b', 'c', 'd'],
      b: ['a', 'd'],
      c: ['a', 'e'],
      d: ['a', 'b'],
      e: ['c'],
      f: ['g'],
      g: ['f'],
    };

    const nodes = depthFirst(graph, 'a');
    expect(nodes).toEqual(new Set(['a', 'b', 'd', 'c', 'e']));
  });

});
