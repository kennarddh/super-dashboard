import ParsePlus from 'Utils/ParseMathExpression/Parser/Plus'
import ReplaceMinus from 'Utils/ParseMathExpression/ReplaceMinus'
import FormatExpression from 'Utils/ParseMathExpression/FormatExpression'
import ParseMathSymbols from 'Utils/ParseMathExpression/Parser/MathSymbols'

const ParseMathExpression = expression => {
	const operators = ['-', '+', '*', '/', '^']

	const minusSplitedExpression = ReplaceMinus(expression)

	const formatted = FormatExpression(minusSplitedExpression, operators)

	const symbolsParsed = ParseMathSymbols(formatted)

	return ParsePlus(symbolsParsed)
}

export default ParseMathExpression
