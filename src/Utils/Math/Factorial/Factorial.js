const Factorial = num => {
	if (num < 0) return -1
	if (num == 0) return 1

	let result = 1

	for (let i = 1; i <= num; i += 1) {
		result = result * i
	}

	return result
}

export default Factorial
