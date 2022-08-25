import SplitParentheses from 'Utils/ParseMathString/SplitParentheses'
import ParseNumber from 'Utils/ParseMathString/ParseNumber'
import ParsePlus from 'Utils/ParseMathString/Parser/Plus'

const Exponentiation = expression => {
	const numbersString = SplitParentheses(expression, '^')

	const numbers = numbersString.map(noStr => {
		const trimed = noStr.trim()

		if (trimed[0] == '(') {
			const expr = trimed.substring(1, trimed.length - 1)

			return ParsePlus(expr)
		}

		return ParseNumber(trimed)
	})

	numbers.reverse()

	const initialValue = numbers[0]

	const result = numbers.slice(1).reduce((acc, no) => no ** acc, initialValue)

	return result
}

export default Exponentiation
