const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(el, options) {
  let repeatering = (separator, string= '', repeatTimes = 1) => {
  let count = [];
  for (let i =0; i<repeatTimes; i ++){count.push(String(string));
  } return count.join(separator)};
  if (options.additionSeparator == undefined) {options.additionSeparator = "|"};
  if (options.separator == undefined) {options.separator = "+"};
  let result = repeatering (options.additionSeparator, options.addition, options.additionRepeatTimes);
  return repeatering((result+options.separator), el, options.repeatTimes) + result;
  
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
