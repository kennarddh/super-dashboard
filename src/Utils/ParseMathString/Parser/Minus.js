import SplitParentheses from 'Utils/ParseMathString/SplitParentheses'
import ParseDivision from 'Utils/ParseMathString/Parser/Division'

const Minus = expression => {
	const numbersString = SplitParentheses(expression, '-')

	const numbers = numbersString.map(ParseDivision)

	const initialValue = numbers[0]

	const result = numbers.slice(1).reduce((acc, no) => acc - no, initialValue)

	return result
}

export default Minus
