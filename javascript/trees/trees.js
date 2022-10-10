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
  preOrder() {
    const traverse = (node) => {
      console.log(node.value);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
  }
  inOrder() {
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      console.log(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
  }
  postOrder() {

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      console.log(node.value);
    };
    traverse(this.root);
  }
}


class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    }
  }

}

let tree = new BinaryTree();
tree.root = new Node(123);
tree.root.left = new Node(22);
tree.root.right = new Node(13);
tree.root.left.left = new Node(190);
tree.root.left.right = new Node(129);
tree.root.right.right = new Node(55);

tree.preOrder();
tree.postOrder();

let anotherTree = new BinarySearchTree();
anotherTree.root = new Node(123);
anotherTree.root.left = new Node(22);
anotherTree.root.right = new Node(13);
anotherTree.root.left.left = new Node(190);
anotherTree.root.left.right = new Node(129);
anotherTree.root.right.right = new Node(55);

anotherTree.preOrder();
anotherTree.postOrder();
