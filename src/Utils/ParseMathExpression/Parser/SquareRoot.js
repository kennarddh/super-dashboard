const SquareRoot = (expression, operators) => {
	const regex = `(_square_root|\\${operators.join('|\\')})`

	return expression
		.split(new RegExp(regex))
		.map(str => str.trim())
		.filter(str => str.length !== 0)
		.reduce((acc, str) => {
			if (str === '_square_root') {
				acc.push(
					Math.sqrt(parseFloat(acc[acc.length - 1], 10)).toString()
				)

				acc = [...acc.slice(0, -2), acc.at(-1)]
			} else {
				acc.push(str)
			}

			return acc
		}, [])
		.join(' ')
}

export default SquareRoot
