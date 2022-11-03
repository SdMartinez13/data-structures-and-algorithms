'use strict';


function leftJoin(ht1, ht2) {
  const join = [];

  for (let i = 0; i < ht1.keyMap.length; i++) {
    let bucket = ht1.keyMap[i];
    if (bucket) {
      for (let j = 0; j < bucket.length; j++) {
        join.push(bucket[j]);
      }
    }
  }
  for (let i = 0; i < join.length; i++) {
    let key = join[i][0];
    let value = ht2.get(key);
    value ? join[i].push(value) : join[i].push(null);
  }

  return join;

}

module.exports = leftJoin;
