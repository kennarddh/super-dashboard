import ParsePlus from 'Utils/ParseMathString/Parser/Plus'

const ParseMathString = expression => {
	const minusSplitedExpression = expression.replaceAll(
		/\(-\d\)/g,
		numberString => `minus_${numberString.slice(2).slice(0, -1)}`
	)

	const operators = ['-', '+', '*', '/', '^']

	const newExpression = operators.reduce(
		(acc, operator) =>
			acc
				.split(operator)
				.map(str => str.trim())
				.join(` ${operator} `),
		minusSplitedExpression
	)

	return ParsePlus(newExpression)
}

export default ParseMathString
