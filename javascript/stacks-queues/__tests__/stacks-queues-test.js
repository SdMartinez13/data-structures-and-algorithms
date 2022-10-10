'use strict';

let Stack = require('../index');
let Queue = require('../index');

describe('Stack', () => {
  it('Can successfully push onto a stack', () => {
    let stack = new Stack();
    console.log('checking the stack', stack);
    stack.push('A');
    expect(stack.top.value).toEqual('A');
  });

  it('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push('B');
    stack.push('C');
    stack.push('D');
    expect(stack.top.value).toEqual('B');
    expect(stack.top.next.value).toEqual('C');
    expect(stack.top.next.next.value).toEqual('D');
  });

  it('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.pop('D');
    expect(stack.top.value).toEqual(null);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.pop('D');
    stack.pop('C');
    stack.pop('B');
    stack.pop('A');
    expect(stack.value).toEqual(null);
  });

  it('Can successfully peek the next item on the stack', () => {
    let stack = new Stack();
    console.log(stack);
    // How to successfully peek into the next item on the stack
  });

  it ('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();
    console.log(stack);

    // How successfully instantiate an empty stack
  });

  it ('Calling pop or peek on empty stack raises exception', () => {
    let stack = new Stack();
    console.log(stack);

    // How to Call pop or peek on empty stack raises exception
  });

});

describe('Queue', () => {
  it ('Can successfully enqueue into a queue', () => {
    let queue = new Queue();
    console.log('checking the queue', queue);
    queue.enqueue('A');
    expect(queue.front.value).toEqual('A');
  });

  it ('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue('B');
    queue.enqueue('C');
    queue.enqueue('D');
    expect(queue.front.value).toEqual('B');
    expect(queue.front.next.value).toEqual('C');
    expect(queue.front.next.next.value).toEqual('D');
  });

  it ('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    queue.dequeue('B');
    expect(queue.front.value).toEqual(null);
  });

  it ('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queue();
    console.log(queue);

    // How to peek into a queue
  });

  it ('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.dequeue('A');
    queue.dequeue('B');
    queue.dequeue('C');
    queue.dequeue('D');
    expect(queue.value).toEqual(null);
  });

  it ('Can successfully instantiate an empty queue', () => {
    let queue = new Queue();
    expect(queue.value).toEqual(null);
  });

  it ('Calling dequeue or peek on empty queue raises exception', () => {
    let queue = new Queue();
    console.log(queue);

    // How to call dequeue or peek on empty queue raises exception
  });

});
