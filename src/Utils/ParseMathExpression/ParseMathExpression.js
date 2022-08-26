import ParsePlus from 'Utils/ParseMathExpression/Parser/Plus'
import ReplaceMinus from 'Utils/ParseMathExpression/ReplaceMinus'
import FormatExpression from 'Utils/ParseMathExpression/FormatExpression'

const ParseMathExpression = expression => {
	const operators = ['-', '+', '*', '/', '^']

	const minusSplitedExpression = ReplaceMinus(expression)

	const formatted = FormatExpression(minusSplitedExpression, operators)

	return ParsePlus(formatted)
}

export default ParseMathExpression
