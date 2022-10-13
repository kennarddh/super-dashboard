import Factorial from './Factorial'

describe('Factorial', () => {
	it.each([
		{ num: -1, expected: -1 },
		{ num: 0, expected: 1 },
		{ num: 1, expected: 1 },
		{ num: 2, expected: 2 },
		{ num: 3, expected: 6 },
		{ num: 4, expected: 24 },
		{ num: 5, expected: 120 },
		{ num: 6, expected: 720 },
	])(
		'Should success, Num: $num, expected: $expected',
		({ num, expected }) => {
			expect.assertions(1)

			expect(Factorial(num)).toBe(expected)
		}
	)
})
