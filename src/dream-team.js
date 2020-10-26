const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {

  if (!Array.isArray(arr)) return false;

  return arr.filter(item => typeof item === 'string')
            .map(str => str.trim())
            .map(str => str[0].toUpperCase())
            .sort()
            .reduce((acc, curr) => acc + curr, '');
};

