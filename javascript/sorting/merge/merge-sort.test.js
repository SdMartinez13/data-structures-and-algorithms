'use strict';

const mergeSort = require('../merge-sort');

describe('Testing the mergeSort function', () => {
  it('should sort the example array', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    mergeSort(arr);
    let result = arr;
    expect(result).toEqual([4, 8, 15, 16, 23, 42]);
  });

});
