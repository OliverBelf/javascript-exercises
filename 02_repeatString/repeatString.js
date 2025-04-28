const repeatString = function (string, times) {
  let arr = [];
  if (times < 0) {
    return "ERROR";
  }
  for (let i = 0; i < times; i++) {
    arr.push(string);
  }
  return arr.join("");
};

// Do not edit below this line
module.exports = repeatString;
