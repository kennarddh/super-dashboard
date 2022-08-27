const Factorial = num => {
	if (num < 0) return -1
	if (num == 0) return 1

	return num * Factorial(num - 1)
}

export default Factorial
