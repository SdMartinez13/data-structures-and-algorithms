'use strict';

const treeIntersection = require('../tree-intersection');
const { BST } = require('../../trees/trees');


describe('Testing treeIntersection function', () => {
  it('should return an array of matching values when all match', () => {
    let tree1 = new BST;
    tree1.add(5);
    tree1.add(3);
    tree1.add(7);
    let tree2 = new BST;
    tree2.add(5);
    tree2.add(3);
    tree2.add(7);

    let result = treeIntersection(tree1, tree2);
    expect(result).toEqual([3, 5, 7]);

  });
  it('should ignore duplicate values in one tree', () => {
    let tree1 = new BST;
    tree1.add(3);
    tree1.add(3);
    tree1.add(3);
    let tree2 = new BST;
    tree2.add(7);
    tree2.add(7);
    tree2.add(7);

    let result = treeIntersection(tree1, tree2);
    expect(result).toEqual([]);
  });
  it('should add duplicate values one time', () => {
    let tree1 = new BST;
    tree1.add(3);
    tree1.add(3);
    tree1.add(3);
    let tree2 = new BST;
    tree2.add(3);
    tree2.add(3);
    tree2.add(3);

    let result = treeIntersection(tree1, tree2);
    expect(result).toEqual([3]);
  });
  it('should return empty array if one of the trees is empty', () => {
    let tree1 = new BST;

    let tree2 = new BST;
    tree2.add(3);
    tree2.add(3);
    tree2.add(3);

    let result = treeIntersection(tree1, tree2);
    expect(result).toEqual([]);
  });
});
