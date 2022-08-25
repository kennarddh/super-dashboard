import SplitParentheses from 'Utils/ParseMathString/SplitParentheses'
import ParseMultiplication from 'Utils/ParseMathString/Parser/Multiplication'

const Division = expression => {
	const numbersString = SplitParentheses(expression, '/')

	const numbers = numbersString.map(ParseMultiplication)

	const initialValue = numbers[0]

	const result = numbers.slice(1).reduce((acc, no) => acc / no, initialValue)

	return result
}

export default Division
