class FloatFactorial extends Error {
	constructor() {
		super('Cannot Factorialize with float')

		this.name = 'FloatFactorial'
	}
}

const Factorial = num => {
	if (num !== Math.round(num)) throw new FloatFactorial()
	if (num === 0) return 1

	let result = 1
	let number = num

	if (number < 0) {
		while (number !== 0) {
			result *= number

			number += 1
		}
	} else {
		while (number !== 0) {
			result *= number

			number -= 1
		}
	}

	return result
}

export default Factorial
