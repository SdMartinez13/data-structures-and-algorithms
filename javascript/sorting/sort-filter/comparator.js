'use strict';

function titleComparator(a, b){
  let A = a.title.replace('The ', '');
  let B = b.title.replace('The ', '');

  if(A < B) return -1;
  if(B < A) return 1;
  return 0;
}

let yearComparator = (A, B) => {
  if (A.year < B.year) {
    return -1;
  }
  if (A.year > B.year) {
    return 1;
  }
  return 0;
};



module.exports = { titleComparator, yearComparator};
