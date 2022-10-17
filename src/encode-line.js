const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
	return Array.from(str)
		.reduce((acc, el, i, arr) => {
			if (i > 0 && el === arr[i - 1]) acc[acc.length - 1] += el
			else acc.push(el)
			return acc
		}, [])
		.map((el) => (el.length === 1 ? el : `${el.length}${el[0]}`))
		.join("")
  }

module.exports = {
  encodeLine
};
