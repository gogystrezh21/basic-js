const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
// function renameFiles(names) {
//   let newName = [];
//   if(!newName || typeof newName != 'object' || newName.length == 0){
//     return []
//   } else {  for (let item of names) {
//     newName.push(item);
//   }
//   for (let i = 0; i < newName.length; i++) {
//     let cnt = 1;
//     for (let j = i + 1; j < newNames.length; j++) {
//       if (newName[i] === newName[j]) {
//         newName[j] = newName[i] + `(${cnt++})`;
//       }
//     }
//   }
//   return newName;}
//   }
  
function renameFiles(names) {
	return names.reduce((acc, file) => {
		if (acc.includes(file)) {
			let last = 0
			for (renamed of acc)
				if (renamed.indexOf(file) === 0) {
					const final = renamed
						.replace(file, "")
						.replace("(", "")
						.replace(")", "")

					if (final.indexOf("(") < 0) last = +final
				}

			acc.push(`${file}(${last + 1})`)
		} else acc.push(file)

		return acc
	}, [])
}

module.exports = {
  renameFiles
};
