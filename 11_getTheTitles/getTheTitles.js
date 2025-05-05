const getTheTitles = function (book_arr) {
  let list_titles = [];

  for (const book of book_arr) {
    list_titles.push(extract_title(book));
  }
  return list_titles;
};

function extract_title(book) {
  return book["title"];
}

// Do not edit below this line
module.exports = getTheTitles;
