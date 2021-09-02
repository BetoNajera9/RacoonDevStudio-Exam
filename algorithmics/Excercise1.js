/* Excersice 1 */

const excercise1 = (str) => {
	const strToArray = str.split('')
	const doubleLetter = []
	let result = []

	strToArray.map((letter) => {
		const equal = doubleLetter.some((element) => element == letter)

		if (!equal) {
			doubleLetter.push(letter)
		} else {
			result.push(letter)
		}
	})

	if (result.length > 0) {
		return result[0]
	} else {
		return null
	}
}

console.log(excercise1('holaa'))
