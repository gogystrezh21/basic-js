const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  results:[],
  getLength() {
    return this.result.length;
    // remove line with error and write your code here
  },
  addLink(el) {
    if (el ===undefined) {
      this.results.push(`()`);
    } else {this.results.push(` ${el} `)};
    return this
    // remove line with error and write your code here
  },
  removeLink(indentificator) {
   if (indentificator<=0 || typeof indentificator !=="number" || indentificator-1>= this.results.length)
  { this.results =[];throw new Error ('You can\'t remove incorrect link!') }
    else {this.results.splice(indentificator -1,1)}
  return this
    // remove line with error and write your code here
  },
  reverseChain() {
    this.results.reverse();
  return this
    // remove line with error and write your code here
  },
  finishChain() {
    let mainChain = '';
    for (let i=0; i <this.results.length; i ++) {
      if (i === 0) {
        mainChain += `(${this.results[i]})`
      } else { 
        mainChain += `~~(${this.results[i]})`}
    }
    this.results=[];
    return mainChain
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
