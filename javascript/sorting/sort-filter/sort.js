'use strict';
const { titleComparator, yearComparator} = require('./comparator');

// Complete for Code Challenge 28
function sortYear(movies) {
  return movies.sort(yearComparator);
}

function sortTitle(movies) {
  return movies.sort(titleComparator);
}

function inGenre(movies, genre) {
  return movies.filter(movie => movie.genres.includes(genre));
}



module.exports = { sortYear, sortTitle, inGenre };
