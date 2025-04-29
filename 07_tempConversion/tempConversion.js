const convertToCelsius = function (temp) {
  const conv_temp = (temp - 32) * (5 / 9);
  return Number(conv_temp.toFixed(1));
};

const convertToFahrenheit = function (temp) {
  const conv_temp = (temp * 9) / 5 + 32;
  return Number(conv_temp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
