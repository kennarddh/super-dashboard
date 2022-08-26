import SplitParentheses from 'Utils/ParseMathExpression/SplitParentheses'
import ParseExponentiation from 'Utils/ParseMathExpression/Parser/Exponentiation'

const Remainder = expression => {
	const numbersString = SplitParentheses(expression, '%')

	const numbers = numbersString.map(ParseExponentiation)

	const initialValue = numbers[0]

	const result = numbers.slice(1).reduce((acc, no) => acc % no, initialValue)

	return result
}

export default Remainder
