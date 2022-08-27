import SplitParentheses from 'Utils/ParseMathExpression/SplitParentheses'
import ParseRecursiveAndNumber from 'Utils/ParseMathExpression/Parser/RecursiveAndNumber'

const Exponentiation = expression => {
	const numbersString = SplitParentheses(expression, '^')

	const numbers = numbersString.map(ParseRecursiveAndNumber)

	numbers.reverse()

	const initialValue = numbers[0]

	const result = numbers.slice(1).reduce((acc, no) => no ** acc, initialValue)

	return result
}

export default Exponentiation
