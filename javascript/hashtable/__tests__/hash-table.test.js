'use strict';
const HashTable = require('./hash-table');

describe ('Hash Table', ()=>{

  it('Can successfully create a table',()=>{
    let table = new HashTable(1024);
    expect(table).toBeInstanceOf(HashTable);
    expect(table.buckets.length).toEqual(1024);
  });

  it('Can successfully set a key value pair to the table',()=>{
    let table = new HashTable(1024);
    table.set('Stephen','me');
    expect(table.get('Stephen')).toBeTruthy();
  });

  it('Can return true or null for table.has() call when appropriate',()=>{
    let table = new HashTable(1024);
    table.set('Stephen','me');
    table.set('Hank','Propane guy');
    expect(table.has('Stephen')).toBeTruthy();
    expect(table.has('Random')).toBeNull();
  });

  it('Can return a list of keys within the table',()=>{
    let table = new HashTable(1024);
    table.set('Stephen','me');
    table.set('John','Doe');
    table.set('Jane', 'Doe');
    expect(table.keys()).toEqual([['Jane'],['John'],['Stephen']]);
  });

});
