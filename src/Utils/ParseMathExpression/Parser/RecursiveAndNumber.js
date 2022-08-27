import ParseNumber from 'Utils/ParseMathExpression/ParseNumber'
import ParsePlus from 'Utils/ParseMathExpression/Parser/Plus'

const RecursiveAndNumber = noStr => {
	const trimed = noStr.trim()

	if (trimed[0] == '(') {
		const expr = trimed.substring(1, trimed.length - 1)

		return ParsePlus(expr)
	}

	return ParseNumber(trimed)
}

export default RecursiveAndNumber
