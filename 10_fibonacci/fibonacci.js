const fibonacci = function (num) {
  if (!Number.isInteger(num)) {
    num = parseInt(num);
  }
  let fib_number = 1;
  let nums = [1];

  if (num < 0) {
    return "OOPS";
  } else if (num == 0) {
    return 0;
  }

  for (let i = 0; i < num; i++) {
    nums.push(fib_number);
    fib_number += nums[i];
  }

  return nums[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
