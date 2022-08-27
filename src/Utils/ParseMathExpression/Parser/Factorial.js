import MathFactorial from 'Utils/Math/Factorial/Factorial'

const Factorial = (expression, operators) => {
	const regex = `(!|\\${operators.join('|\\')})`

	return expression
		.split(new RegExp(regex))
		.map(str => str.trim())
		.filter(str => str.length !== 0)
		.reduce((acc, str) => {
			if (str === '!') {
				acc.push(
					MathFactorial(
						parseFloat(acc[acc.length - 1], 10)
					).toString()
				)

				acc = [...acc.slice(0, -2), acc.at(-1)]
			} else {
				acc.push(str)
			}

			return acc
		}, [])
		.join(' ')
}

export default Factorial
