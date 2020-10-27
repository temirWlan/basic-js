const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const num = +sampleActivity;
  const n = HALF_LIFE_PERIOD / 0.693;

  if (typeof sampleActivity !== 'string' || typeof num !== 'number' || 
      isNaN(num) || n <= 0 || n > MODERN_ACTIVITY) return false;


  return Math.round(Math.log(MODERN_ACTIVITY / num) * n);
};
