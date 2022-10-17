const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
	let sum = 0

	for (rowOrder in matrix) {
		const row = matrix[rowOrder]

		if (rowOrder == 0) {
			sum = row.reduce((a, b) => a + b)
		} else {
			const prewRow = matrix[rowOrder - 1]

			for (inRowOrder in row)
				if (prewRow[inRowOrder] !== 0) sum += row[inRowOrder]
		}
	}

	return sum
}

module.exports = {
  getMatrixElementsSum
};
