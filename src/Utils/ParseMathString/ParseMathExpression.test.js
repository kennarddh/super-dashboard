import ParseMathExpression from './ParseMathExpression'

describe('ParseMathExpression', () => {
	it.each([
		{ expression: '10+20', expected: 30 },
		{ expression: '(10+10*10)^2', expected: 12100 },
		{ expression: '20+ 10 - 80 * 10', expected: -770 },
		{ expression: '20*10+10 /20 ', expected: 200.5 },
		{ expression: '(10 + 10) * 10', expected: 200 },
		{ expression: '10 - 20 + 10', expected: 0 },
		{ expression: '30 + (10 * 2)^3', expected: 8030 },
		{ expression: '0.5 + 0.5', expected: 1 },
		{ expression: '0.5 * 3 + 10', expected: 11.5 },
		{
			expression:
				'30^2 * 10 / 20 +10 *20*(10- 20 *3)  + (10^4 + 10) + 10',
			expected: 470,
		},
		{ expression: '3^2^2', expected: 81 },
		{
			expression: '10 * (10 + (10 / 100 )) + (10 * (10 - 20))',
			expected: 1,
		},
	])(
		'Should success, Expression: $expression, expected: $expected',
		({ expression, expected }) => {
			expect.assertions(1)

			expect(ParseMathExpression(expression)).toBe(expected)
		}
	)
})
