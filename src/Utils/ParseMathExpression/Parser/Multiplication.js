import SplitParentheses from 'Utils/ParseMathExpression/SplitParentheses'
import ParseRemainder from 'Utils/ParseMathExpression/Parser/Remainder'

const Multiplication = expression => {
	const numbersString = SplitParentheses(expression, '*')

	const numbers = numbersString.map(ParseRemainder)

	const initialValue = 1.0

	const result = numbers.reduce((acc, no) => acc * no, initialValue)

	return result
}

export default Multiplication
