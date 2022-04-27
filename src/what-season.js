const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
// function getSeason(date) {
//   const m = date.getMounth()
//   if (m ===11 || m ===12 || m ===1) {
//     return 'winter'
//   } return false
// }
 
function getSeason(el) {
  if (!el) {
    return 'Unable to determine the time of year!'
  } else if (Object.getOwnPropertySymbols(el).length !== 0 || !(el instanceof Date) ) {
    throw new Error ('Invalid date!')
  } else {
  const m = el.getMonth()
  if (m <= 1 || m === 11){
    return 'winter'
  }else if (m <= 4) {
    return 'spring'
  }else if (m <= 7) {
    return 'summer'
  }else {
    return 'fall'
  }
}
}
module.exports = {
  getSeason
};
