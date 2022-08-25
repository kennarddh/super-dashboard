// split expression by operator considering parentheses
const split = (expression, operator) => {
	const result = []

	let braces = 0

	let currentChunk = ''

	for (let i = 0; i < expression.length; i += 1) {
		const curChar = expression[i]
		if (curChar == '(') {
			braces += 1
		} else if (curChar == ')') {
			braces -= 1
		}

		if (braces == 0 && operator == curChar) {
			result.push(currentChunk)

			currentChunk = ''
		} else {
			currentChunk += curChar
		}
	}

	if (currentChunk != '') {
		result.push(currentChunk)
	}

	return result
}

const parseExponentiation = expression => {
	const numbersString = split(expression, '^')

	const numbers = numbersString.map(noStr => {
		if (noStr[0] == '(') {
			const expr = noStr.substring(1, noStr.length - 2)

			return parsePlus(expr)
		}

		const isMinus = noStr.trim().slice(0, 5) === 'minus'

		return isMinus
			? parseFloat(noStr.trim().slice(6, noStr.length - 1), 10) * -1
			: parseFloat(noStr, 10)
	})

	numbers.reverse()

	const initialValue = numbers[0]

	const result = numbers.slice(1).reduce((acc, no) => no ** acc, initialValue)

	return result
}

const parseMultiplication = expression => {
	const numbersString = split(expression, '*')

	const numbers = numbersString.map(parseExponentiation)

	const initialValue = 1.0

	const result = numbers.reduce((acc, no) => acc * no, initialValue)

	return result
}

const parseDivision = expression => {
	const numbersString = split(expression, '/')

	const numbers = numbersString.map(parseMultiplication)

	const initialValue = numbers[0]

	const result = numbers.slice(1).reduce((acc, no) => acc / no, initialValue)

	return result
}

const parseMinus = expression => {
	const numbersString = split(expression, '-')

	const numbers = numbersString.map(parseDivision)

	const initialValue = numbers[0]

	const result = numbers.slice(1).reduce((acc, no) => acc - no, initialValue)

	return result
}

const parsePlus = expression => {
	const numbersString = split(expression, '+')

	const numbers = numbersString.map(parseMinus)

	const initialValue = 0.0

	const result = numbers.reduce((acc, no) => acc + no, initialValue)

	return result
}

const ParseMathString = expression => {
	const minusSplitedExpression = expression.replaceAll(
		/\(-\d\)/g,
		numberString => `minus_${numberString.slice(2).slice(0, -1)}`
	)

	const operators = ['-', '+', '*', '/', '^']

	const newExpression = operators.reduce(
		(acc, operator) =>
			acc
				.split(operator)
				.map(str => str.trim())
				.join(` ${operator} `),
		minusSplitedExpression
	)

	return parsePlus(newExpression)
}

export default ParseMathString
