'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {

  let listTest = new LinkedList;

  it('Can successfully instantiate an empty linked list', () => {
    expect(listTest.head).toBeNull();
  });

  it('Can properly insert into the linked list ', () => {
    listTest.insert(1);
    expect(listTest.head).toBeTruthy();
  });

  it('The head property will properly point to the first node in the linked list ', () => {
    expect(listTest.head.value).toBe('a');
    expect(listTest.head.next).toBeNull();
  });


  it('Can properly insert multiple nodes into the linked list', () => {
    listTest.insert('b');
    listTest.insert('c');
    expect(listTest.head.value).toBe('c');
    expect(listTest.head.next.value).toBe('b');
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    listTest.insert('d');
    expect(listTest.includes('d')).toBeTruthy();
  });


  it('Will return false when searching for a value in the linked list that does not exist ', () => {
    listTest.insert(5);
    expect(listTest.includes()).toBeFalsy();
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const listStringTest = `{${'e'}} -> {${'d'}} -> {${'c'}} -> {${'b'}} -> {${'a'}} -> NULL`;
    expect(listTest.toString()).toBe(listStringTest);
  });

});
