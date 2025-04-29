const sumAll = function (start_num, end_num) {
  let sum = 0;
  if (start_num < 0 || end_num < 0) {
    return "ERROR";
  }
  if (!Number.isInteger(start_num) || !Number.isInteger(end_num)) {
    return "ERROR";
  }
  const bigNumber = start_num > end_num ? start_num : end_num;
  const smallNumber = start_num > end_num ? end_num : start_num;

  for (let i = smallNumber; i <= bigNumber; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
