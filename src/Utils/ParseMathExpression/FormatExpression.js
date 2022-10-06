const FormatExpression = (expression, operators) =>
	operators.reduce(
		(acc, operator) =>
			acc
				.split(operator)
				.map(str => str.trim())
				.join(` ${operator} `),
		expression
	)

export default FormatExpression
