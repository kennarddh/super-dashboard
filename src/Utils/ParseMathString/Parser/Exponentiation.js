import SplitParentheses from 'Utils/ParseMathString/SplitParentheses'
import ParseNumber from 'Utils/ParseMathString/ParseNumber'
import ParsePlus from 'Utils/ParseMathString/Parser/Plus'

const Exponentiation = expression => {
	const numbersString = SplitParentheses(expression, '^')

	const numbers = numbersString.map(noStr => {
		if (noStr[0] == '(') {
			const expr = noStr.substring(1, noStr.length - 2)

			return ParsePlus(expr)
		}

		return ParseNumber(noStr)
	})

	numbers.reverse()

	const initialValue = numbers[0]

	const result = numbers.slice(1).reduce((acc, no) => no ** acc, initialValue)

	return result
}

export default Exponentiation
