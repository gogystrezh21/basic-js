const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(el, results=1,counted=1) {
    el.forEach(element => {
      if (Array.isArray(element))
        counted = counted+this.calculateDepth(element)
      if (counted>results) 
        results = counted;
        counted = 1;
    });
    return results
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
