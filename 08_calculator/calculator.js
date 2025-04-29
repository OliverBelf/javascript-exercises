const add = function (num_1, num_2) {
  return num_1 + num_2;
};

const subtract = function (num_1, num_2) {
  return num_1 - num_2;
};

const sum = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function (arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
};

const power = function (num_1, num_2) {
  return num_1 ** num_2;
};

const factorial = function (num) {
  let factorial = num;
  if (num == 0) {
    return 1;
  }
  for (let i = num - 1; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
