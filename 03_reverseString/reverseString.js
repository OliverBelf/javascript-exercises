const reverseString = function (str) {
  let reversed_str = [];

  for (let i = str.length; i >= 0; i--) {
    reversed_str.push(str[i]);
  }

  return reversed_str.join("");
};

// Do not edit below this line
module.exports = reverseString;
