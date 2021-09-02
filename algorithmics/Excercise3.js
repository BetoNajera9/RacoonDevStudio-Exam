/* Excersice 2 */

// Create a random array with numbers
const getRandomArray = () => {
	const randomArray = []

	for (
		let index = 0;
		index < Math.floor(Math.random() * (10 - 1)) + 1;
		index++
	) {
		let number = Math.floor(Math.random() * (9 - 1)) + 1
		number += (Math.floor(Math.random() * (9 - 1)) + 1) / 10

		randomArray.push(number)
	}

	return randomArray
}

const algorithm = (list) => {
	console.log(list)
	const result = []

	list.map((element) => {
		const X = Math.floor(element)
		const Y = parseFloat(element.toString().split('.')[1])

		for (let i = 0; i < X; i++) {
			if (result.length - 1 < i) {
				result.push([])
			}
			for (let j = 0; j < Y; j++) {
				if (result[i].length - 1 < j) {
					result[i].push(1)
				} else {
					result[i][j] += 1
				}
			}
		}
	})

	let max = 0
	let repeat = 0

	console.log(result)

	result.map((elmentArray) => {
		elmentArray.map((element) => {
			if (element > max) {
				max = element
				repeat = 1
			} else if (element == max) {
				repeat += 1
			}
		})
	})

	return repeat
}

console.log(algorithm(getRandomArray()))
/*
[(1.2, 2.1, 2.2)]
*/
