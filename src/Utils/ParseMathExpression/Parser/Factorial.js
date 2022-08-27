import MathFactorial from 'Utils/Math/Factorial/Factorial'

const Factorial = (expression, operators) => {
	const regex = `(!|\\${operators.join('|\\')})`

	return expression
		.split(new RegExp(regex))
		.map(str => str.trim())
		.filter(str => str.length !== 0)
		.reduce((acc, str, index, array) => {
			if (str === '!') {
				acc.pop()
				acc.push(
					MathFactorial(parseFloat(array[index - 1], 10)).toString()
				)
			} else {
				acc.push(str)
			}

			return acc
		}, [])
		.join(' ')
}

export default Factorial
