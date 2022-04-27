const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
// function createDreamTeam(el) {
//   if (Array.isArray(el)){
//      return el.sort().filter(function(item) { return typeof item == 'string'; }).join('').replace(/[a-z]/g, '').replace(/[ ]/g, '') }
//      return false
// }

function createDreamTeam(el) {
  if (Array.isArray(el)){
      
     return el.filter(function(item) { return typeof item == 'string';}).map(element => {return element.trim();}).sort(Intl.Collator().compare).map(el => el.slice(0,1)).join('').replace(/[a-z]+/gm, match => match.toUpperCase()).replace(/[ ]/g, '')}
     return false
}

module.exports = {
  createDreamTeam
};
