const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(el) {
  if (typeof el !== 'string' || isNaN(el)) {
    return false;
  } else if ( el>15 || el<=0){
    return false
  }
  return Math.ceil((Math.log(MODERN_ACTIVITY/el))/(0.693/HALF_LIFE_PERIOD));
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
