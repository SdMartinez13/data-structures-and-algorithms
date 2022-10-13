'use strict';

let { BinaryTree, Node } = require('./Tree.js');

let tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(17);

function fizzBuzzTree(tree) {
  const traverse = node => {
    if (node.value % 3 !== 0 && node.value % 5 !== 0) {
      node.value = node.value.toString();
    } else if (node.value % 3 === 0 && node.value % 5 !== 0) {
      node.value = 'Fizz';
    } else if (node.value % 3 !== 0 && node.value % 5 === 0) {
      node.value = 'Buzz';
    } else if (node.value % 3 === 0 && node.value % 5 === 0) {
      node.value = 'FizzBuzz';
    }
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    console.log(node.value);
  };
  traverse(tree.root);
  return tree;
}

fizzBuzzTree(tree);
