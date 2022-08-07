const ftoc = function(farenheit) {
  let answer = (farenheit - 32) * (5 / 9);
  return parseFloat(answer.toFixed(1));
};

const ctof = function(celcius) {
  let answer = (celcius * (9/5)) + 32;
  return parseFloat(answer.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
