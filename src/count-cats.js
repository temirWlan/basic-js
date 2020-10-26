const CustomError = require("../extensions/custom-error");

module.exports = countCats = matrix => matrix.flat().filter(item => item === '^^').length;
