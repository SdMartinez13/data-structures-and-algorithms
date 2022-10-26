'use strict';

const insertionSort = require('./index');

describe('Insertion Sort Tests', () => {

  test('Sorts elements of array from lowest to highest', () => {
    let array = [8, 4, 23, 42, 16, 15];
    let results = insertionSort(array);
    console.log(results);
    expect(results[0]).toEqual(4);
    expect(results[5]).toEqual(42);
  });

  test('Maintains number of elements in array', () => {
    let array = [8, 4, 23, 42, 16, 15];
    let results = insertionSort(array);
    expect(results.length).toEqual(6);
  });

});
