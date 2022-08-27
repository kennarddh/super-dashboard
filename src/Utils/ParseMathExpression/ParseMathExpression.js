import ParsePlus from 'Utils/ParseMathExpression/Parser/Plus'
import ReplaceMinus from 'Utils/ParseMathExpression/ReplaceMinus'
import FormatExpression from 'Utils/ParseMathExpression/FormatExpression'
import ParseMathSymbols from 'Utils/ParseMathExpression/Parser/MathSymbols'
import ParseFactorial from 'Utils/ParseMathExpression/Parser/Factorial'
import ParseSquareRoot from 'Utils/ParseMathExpression/Parser/SquareRoot'
import ParseCubeRoot from 'Utils/ParseMathExpression/Parser/CubeRoot'

const ParseMathExpression = expression => {
	const operators = ['-', '+', '*', '/', '^', '%']

	const minusSplitedExpression = ReplaceMinus(expression)

	const formatted = FormatExpression(minusSplitedExpression, operators)

	const symbolsParsed = ParseMathSymbols(formatted)

	const factorialParsed = ParseFactorial(symbolsParsed, operators)
	const squareRootParsed = ParseSquareRoot(factorialParsed, operators)
	const cubeRootParsed = ParseCubeRoot(squareRootParsed, operators)

	return ParsePlus(cubeRootParsed)
}

export default ParseMathExpression
