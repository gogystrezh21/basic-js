const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr) || !arr instanceof Array) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (!arr || arr.length == 0) return [];
  let result = arr.slice();
  if (arr.includes('--discard-next')) {
    let index = result.findIndex(item => item === "--discard-next");
    if (result.length < arr.length) {
      result.splice(index, 1);
      return result;
    }
    result[index + 1] ? result.splice(index, 2) : result.splice(index, 1);
  }
  if (arr.includes('--double-next')) {
    let index = result.findIndex(item => item === "--double-next");
    if (result.length < arr.length) {
      result.splice(index, 1);
      return result;
    }
    result[index + 1] ? result[index] = result[++index] : result.splice(index, 1);
  }
  if (arr.includes('--double-prev')) {
    let index = result.findIndex(item => item === "--double-prev");
    if (result.length < arr.length) {
      result.splice(index, 1);
      return result;
    }
    result[index - 1] ? result[index] = result[--index] : result.splice(index, 1);
  }
  if (arr.includes('--discard-prev')) {
    let index = result.findIndex(item => item === "--discard-prev");
    if (result.length < arr.length) {
      result.splice(index, 1);
      return result;
    }
    result[index - 1] ? result.splice(--index, 2) : result.splice(index, 1);
  }
  return result;
}
module.exports = {
  transform
};
