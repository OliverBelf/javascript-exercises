const removeFromArray = function (arr, ...num_to_remove) {
  // Now the num_to_remove can be a an array, i.e. similar to the kwargs in python
  // Then we filter the array from numers that are not included in the num_to_remove array
  let clean_array = arr.filter((num) => !num_to_remove.includes(num));

  return clean_array;
};

// Do not edit below this line
module.exports = removeFromArray;
