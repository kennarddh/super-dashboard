// split expression by operator considering parentheses
const SplitParentheses = (expression, operator) => {
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

export default SplitParentheses
