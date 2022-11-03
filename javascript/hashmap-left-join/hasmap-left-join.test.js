'use strict';

const HashTable = require('../hashtable/hash-table');
const leftJoin = require('./hashmap-left-join');

describe('Testing the LEFT join function leftJoin', () => {
  it('Should return an array with the key and both values for matching keys', () => {
    let ht1 = new HashTable(5);
    let ht2 = new HashTable(5);
    ht1.set('match', 'valueOne');
    ht2.set('match', 'valueTwo');

    let result = leftJoin(ht1, ht2);
    expect(result[0]).toEqual(['match', 'valueOne', 'valueTwo']);
  });
  it('Should return an array with key, val1 and null when there is no match key in table 2', () => {
    let ht1 = new HashTable(5);
    let ht2 = new HashTable(5);
    ht1.set('match', 'valueOne');
    ht2.set('notmatch', 'valueTwo');

    let result = leftJoin(ht1, ht2);
    expect(result[0]).toEqual(['match', 'valueOne', null]);
  });
  it('Should return an empty array when there are no values in table 1', () => {
    let ht1 = new HashTable(5);
    let ht2 = new HashTable(5);

    ht2.set('notmatch', 'valueTwo');

    let result = leftJoin(ht1, ht2);
    expect(result).toEqual([]);
  });
  it('Should pass with example data', () => {
    let synonyms = new HashTable(53);
    let antonyms = new HashTable(53);

    synonyms.set('diligent', 'employed');
    antonyms.set('diligent', 'idle');
    synonyms.set('fond', 'enamored');
    antonyms.set('fond', 'averse');
    synonyms.set('guide', 'usher');
    antonyms.set('guide', 'follow');
    synonyms.set('outfit', 'garb');
    antonyms.set('flow', 'jam');
    synonyms.set('wrath', 'anger');
    antonyms.set('wrath', 'delight');

    let result = leftJoin(synonyms, antonyms);
    expect(result).toEqual([
      ['fond', 'enamored', 'averse'],
      ['wrath', 'anger', 'delight'],
      ['guide', 'usher', 'follow'],
      ['diligent', 'employed', 'idle'],
      ['outfit', 'garb', null]
    ]);
  });
});
