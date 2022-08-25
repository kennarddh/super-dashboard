import SplitParentheses from 'Utils/ParseMathString/SplitParentheses'
import ParseMinus from 'Utils/ParseMathString/Parser/Minus'

const Plus = expression => {
	const numbersString = SplitParentheses(expression, '+')

	const numbers = numbersString.map(ParseMinus)

	const initialValue = 0.0

	const result = numbers.reduce((acc, no) => acc + no, initialValue)

	return result
}

export default Plus
