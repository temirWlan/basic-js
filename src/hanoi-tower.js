const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  const result = {
    turns: (2 ** disksNumber) - 1,
    seconds: Math.floor((((2 ** disksNumber) - 1) / turnsSpeed) * 3600)
  };

  return result;
};
