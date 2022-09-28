'use strict';

const { it } = require('eslint/lib/rule-tester/rule-tester');
// Require our linked list implementation
const { LinkedList } = require('../index');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
  it('Should create a new linked list', () => {
    let ll = new LinkedList();
    expect(ll.head).toBeNull();
  });
});
