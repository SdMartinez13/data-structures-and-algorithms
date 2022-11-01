
let test = 'It was a quiet, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

function removePunctuation(string) {
  return string.replace(regex, '');
}


function first_repeating_word(string){

  let puncString = removePunctuation(string);
  let lowString = puncString.toLowerCase();

  let word_count = new Map();

  for(let i of lowString.split(' ')){
    if(word_count.has(i)){
      word_count.set(i,word_count.get(i) + 1);
    }
    else word_count.set(i,1);

    if(word_count.get(i) > 1)
      return i;
  }
  return 'No word is being repeated';
}

console.log(first_repeating_word(test));


