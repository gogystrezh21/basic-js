const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2 ) {
  let result = 0;
  for (let i = 0; i <s2.length; i++){
      let j = s1.indexOf(s2[i]);
      if ( j >= 0) {result++;
      s1 = s1.replace(s2[i],' ');}
  } return result;
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
