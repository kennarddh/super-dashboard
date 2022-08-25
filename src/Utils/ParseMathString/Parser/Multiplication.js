import SplitParentheses from 'Utils/ParseMathString/SplitParentheses'
import ParseExponentiation from 'Utils/ParseMathString/Parser/Exponentiation'

const Multiplication = expression => {
	const numbersString = SplitParentheses(expression, '*')

	const numbers = numbersString.map(ParseExponentiation)

	const initialValue = 1.0

	const result = numbers.reduce((acc, no) => acc * no, initialValue)

	return result
}

export default Multiplication
