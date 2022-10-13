'use strict';

// const { node, fizzBuzzTree, BianryTree } = require('./tree-fizz-buzz');

let { BinaryTree, Node } = require('./Tree.js');

let tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(17);

