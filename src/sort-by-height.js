const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(el) {
    let elF = el.filter(element=>{
    if (element !== -1 ) {
    return element;}}).sort((a,b) => a-b);
    for(let i = 0; i < el.length; i++) {
    if(el[i] != -1) {el[i] = elF.shift();}
} return el;
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
