const parseExponentiation = expression => {
	const numbersString = expression.split('^')

	const numbers = numbersString.map(noStr => parseFloat(noStr, 10))

	numbers.reverse()

	const initialValue = numbers[0]

	const result = numbers.slice(1).reduce((acc, no) => no ** acc, initialValue)

	return result
}

const parseMultiplication = expression => {
	const numbersString = expression.split('*')

	const numbers = numbersString.map(parseExponentiation)

	const initialValue = 1.0

	const result = numbers.reduce((acc, no) => acc * no, initialValue)

	return result
}

const parseDivision = expression => {
	const numbersString = expression.split('/')

	const numbers = numbersString.map(parseMultiplication)

	const initialValue = numbers[0]

	const result = numbers.slice(1).reduce((acc, no) => acc / no, initialValue)

	return result
}

const parseMinus = expression => {
	const numbersString = expression.split('-')

	const numbers = numbersString.map(parseDivision)

	const initialValue = numbers[0]

	const result = numbers.slice(1).reduce((acc, no) => acc - no, initialValue)

	return result
}

const parsePlus = expression => {
	const numbersString = expression.split('+')

	const numbers = numbersString.map(parseMinus)

	const initialValue = 0.0

	const result = numbers.reduce((acc, no) => acc + no, initialValue)

	return result
}

const ParseMathString = expression => parsePlus(expression)

console.log(ParseMathString('4 ^ 3 ^ 2'))

export default ParseMathString
