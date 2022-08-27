import ParsePlus from 'Utils/ParseMathExpression/Parser/Plus'
import ReplaceMinus from 'Utils/ParseMathExpression/ReplaceMinus'
import FormatExpression from 'Utils/ParseMathExpression/FormatExpression'
import ParseMathSymbols from 'Utils/ParseMathExpression/Parser/MathSymbols'
import ParseFactorial from 'Utils/ParseMathExpression/Parser/Factorial'

const ParseMathExpression = expression => {
	const operators = ['-', '+', '*', '/', '^', '%']

	const minusSplitedExpression = ReplaceMinus(expression)

	const formatted = FormatExpression(minusSplitedExpression, operators)

	const symbolsParsed = ParseMathSymbols(formatted)

	const factorialParsed = ParseFactorial(symbolsParsed, operators)

	return ParsePlus(factorialParsed)
}

export default ParseMathExpression
