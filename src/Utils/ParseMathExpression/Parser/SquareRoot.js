const SquareRoot = (expression, operators) => {
	const regex = `(square_root_|\\${operators.join('|\\')})`

	let transformNext = false

	return expression
		.split(new RegExp(regex))
		.map(str => str.trim())
		.filter(str => str.length !== 0)
		.reduce((acc, str) => {
			if (transformNext) {
				acc.push(Math.sqrt(parseFloat(str, 10)).toString())

				acc = [...acc.slice(0, -2), acc.at(-1)]

				transformNext = false
			} else if (str === 'square_root_') {
				transformNext = true
			} else {
				acc.push(str)
			}

			return acc
		}, [])
		.join(' ')
}

export default SquareRoot
