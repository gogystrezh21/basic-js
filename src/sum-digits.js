const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let s= n.toString().split("").join("+")
  if (eval(s) >= 10) {
    return n.toString().split("").slice(-1).join("")*1
  } else {
    return eval(s)
  }
  // remove line with error and write your code here
}

module.exports = {
  getSumOfDigits
};
