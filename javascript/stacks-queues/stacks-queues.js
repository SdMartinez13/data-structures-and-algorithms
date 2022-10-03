'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    let node = new Node(value);

    node.next = this.top;
    this.top = node;
  }
  pop() {
    if (this.top === null) return 'Exception';
    let value = this.top.value;
    this.top = this.top.next;
    return value;
  }
  peek() {
    if (this.top === null) return 'Exception';
    let value = this.top.value;
    return value;
  }
  isEmpty() {
    let result;
    this.top === null ? result = true : result = false;
    return result;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }
  enqueue(value) {
    let node = new Node(value);

    if (this.front === null) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
  }
  dequeue() {
    if (this.front === null) return 'Exception';
    let removed = this.front;
    if (removed.next === null) {
      this.back = null;
    }
    this.front = this.front.next;
    removed.next = null;
    return removed.value;
  }
  peek() {
    if (this.front === null) return 'Exception';
    let value = this.front.value;
    return value;
  }
  isEmpty() {
    let result;
    this.front === null ? result = true : result = false;
    return result;
  }
}

module.exports = {
  Stack,
  Queue,
};
