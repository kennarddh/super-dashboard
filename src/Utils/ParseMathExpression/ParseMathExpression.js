import ParsePlus from 'Utils/ParseMathExpression/Parser/Plus'
import FormatExpression from './FormatExpression'

const ParseMathExpression = expression => {
	const minusSplitedExpression = expression.replaceAll(
		/\(-\d+\)/g,
		numberString => `minus_${numberString.slice(2).slice(0, -1)}`
	)

	const operators = ['-', '+', '*', '/', '^']

	const formatted = FormatExpression(minusSplitedExpression, operators)

	return ParsePlus(formatted)
}

export default ParseMathExpression
