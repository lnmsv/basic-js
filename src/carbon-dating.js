const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || !sampleActivity) {return 0;}
  
  let num = parseFloat(sampleActivity);
  if (Number.isNaN(num) || num >= 15 || num <= 0) {return false;}
  
  let k = 0.693 / HALF_LIFE_PERIOD;
  let age = Math.ceil(Math.log(MODERN_ACTIVITY / num) / k);
  return age;
};
