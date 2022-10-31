'use strict';

const { LinkedList } = require('../linked-list/linked-list');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let charactersArr = key.split('');
    let asciiSum = charactersArr.reduce((total, character) => {
      return total + character.charCodeAt(0);
    }, 0);

    let hash = asciiSum * 599;
    return hash % this.size;
  }

  set(key, value) {
    let bucket = new LinkedList;
    let hashKey = this.hash(key);
    let data = { [key]: value };
    bucket.insert(data);
    this.bucket[hashKey] = bucket;

  }

  get(key) {
    let hashKey = this.hash(key);
    return Object.values(this.bucket[hashKey].head.value);
  }

  has(key) {
    let hashKey = this.hash(key);
    if(this.buckets[hashKey]){
      return true;
    }
    return null;
  }

  keys() {
    let keyArray=[];
    this.buckets.forEach(bucket => {
      if(bucket){
        keyArray.push(Object.keys(bucket.head.value));
      }
    });
    return keyArray;
  }
}

// let table = new HashTable(1024);
// console.log(table);
// console.log(table.hash('Ryan'));
// console.log(table.hash('Audrey'));
// table.set('Stephen','me');
// table.set('Audrey', 'Audrey');
// table.set('Ryan', 'Ryan');
// console.log(table);

// console.log(JSON.stringify(table.buckets[650]));
// console.log(JSON.stringify(table.buckets[730]));

// console.log(table.get('Ryan'));
// console.log(table.get('Stephen'));
// console.log(table.has('Ryan'));
// console.log(table.has('Audrey'));
// console.log(table.has('Stephen'));



module.exports = HashTable;
