const palindromes = function (str) {
  str = str.toLowerCase();
  char_list = [];
  char_list_foward = [];
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i].match(/[a-z0-9]/i)) {
      char_list.push(str[i]);
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z0-9]/i)) {
      char_list_foward.push(str[i]);
    }
  }
  console.log(char_list.join(""));
  console.log(char_list_foward.join(""));

  if (char_list.join("") == char_list_foward.join("")) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
