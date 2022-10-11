'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  getMax() {
    let maxValue = 0;
    let current = this.root;

    if (!current) return 'EMPTY TREE';

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.value > maxValue) maxValue = node.value;
      if (node.right) traverse(node.right);
    };

    traverse(current);
    return maxValue;
  }
}

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
n5.left = n8;
n6.right = n9;


console.log(JSON.stringify(tree));
console.log(tree.getMax());


module.exports = {
  BinaryTree,
  Node
};
