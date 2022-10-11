'use strict';

const { BinaryTree, Node } = require('../tree-max');

let tree = new BinaryTree;
let n1 = new Node(2);
let n2 = new Node(7);
let n3 = new Node(5);
let n4 = new Node(2);
let n5 = new Node(6);
let n6 = new Node(5);
let n7 = new Node(11);
let n8 = new Node(9);
let n9 = new Node(4);

tree.root = n1;
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;
n4.left = n8;
n4.right = n9;

describe('Testing getMax method on BinaryTree', () => {
  it('should return the max value in the tree at root', () => {
    n1.value = 1;
    let result = tree.getMax();
    expect(result).toEqual(1);
  });
  it('should return the max value in the tree at far left', () => {
    n4.value = 8;
    let result = tree.getMax();
    expect(result).toEqual(90);
  });
  it('should return the max value in the tree at far right', () => {
    n9.value = 27;
    let result = tree.getMax();
    expect(result).toEqual(55);
  });
  it('should return exception if tree is empty', () => {
    let emptyTree = new BinaryTree;
    let result = emptyTree.findMax();
    expect(result).toEqual('EMPTY TREE');
  });
});
