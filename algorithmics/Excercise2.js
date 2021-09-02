/* Excersice 2 */

const interval = (list) => {
	console.log(list)

	let resultX = list[0][0]
	let resultY = list[0][1]

	list.map((element) => {
		if (element[0] > resultX) {
			resultX = element[0]
		}
		if (element[1] < resultY) {
			resultY = element[1]
		}
	})

	if (resultY < resultX) return [resultY, resultX]

	return [resultX, resultY]
}

const getRandomArray = () => {
	const randomArray = []

	for (
		let index = 0;
		index < Math.floor(Math.random() * (10 - 1)) + 1;
		index++
	) {
		let randomA = [
			Math.floor(Math.random() * (100 - 1)) + 1,
			Math.floor(Math.random() * (100 - 1)) + 1,
		]

		while (randomA[0] > randomA[1]) {
			randomA = [
				Math.floor(Math.random() * (100 - 1)) + 1,
				Math.floor(Math.random() * (100 - 1)) + 1,
			]
		}

		randomArray.push(randomA)
	}

	return randomArray
}

console.log(interval(getRandomArray()))

/*
  [
		[6, 9],
		[0, 3],
		[2, 6],
		[3, 4],
	]
*/
