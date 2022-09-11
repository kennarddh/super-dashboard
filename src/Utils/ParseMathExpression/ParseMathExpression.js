import InfixExpressionEvaluator from 'Utils/ParseMathExpression/InfixExpressionEvaluator'
import FormatExpression from 'Utils/ParseMathExpression/FormatExpression'
import ParseMathSymbols from 'Utils/ParseMathExpression/Parser/MathSymbols'

const ParseMathExpression = rawExpression => {
	const operators = ['-', '+', '*', '/', '^', '%', '(', ')', 'root', '!']

	const expression = rawExpression.replace(
		/-((\d+)|pi|e)/g,
		x => `minus>${x.slice(1)}`
	)

	const formatted = FormatExpression(expression, operators)

	const symbolsParsed = ParseMathSymbols(formatted)

	console.log({ formatted, symbolsParsed })

	return InfixExpressionEvaluator(symbolsParsed)
}

export default ParseMathExpression
