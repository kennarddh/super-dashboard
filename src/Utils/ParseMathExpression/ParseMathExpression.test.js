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
		{ expression: '(-1) + (-10) * 3 / (-4)', expected: 6.5 },
		{ expression: 'pi * 10', expected: 31.41592653589793 },
		{ expression: 'pi * 10 ^ 2', expected: 314.1592653589793 },
		{ expression: 'pi * pi', expected: 9.869604401089358 },
		{ expression: 'pi', expected: 3.141592653589793 },
		{ expression: 'e * 10', expected: 27.18281828459045 },
		{ expression: 'e * 10 ^ 2', expected: 271.8281828459045 },
		{ expression: '10%3', expected: 1 },
		{ expression: '10 + 10%3', expected: 11 },
		{ expression: '10 + 10! * 10', expected: 36288010 },
		{ expression: '20 / 5! - 10', expected: -9.833333333333334 },
		{ expression: '3!!', expected: 720 },
		{ expression: 'square_root_9', expected: 3 },
		{ expression: 'square_root_100', expected: 10 },
		{ expression: 'square_root_64', expected: 8 },
		{ expression: 'cube_root_8', expected: 2 },
		{ expression: 'cube_root_27', expected: 3 },
		{ expression: 'cube_root_64', expected: 4 },
		{ expression: '(-e)', expected: -2.718281828459045 },
		{ expression: '(-pi)', expected: -3.141592653589793 },
		{ expression: 'square_root_4!', expected: 4.898979485566356 },
		{ expression: 'cube_root_6!', expected: 8.96280949311433 },
		{ expression: '60!', expected: Infinity },
	])(
		'Should success, Expression: $expression, expected: $expected',
		({ expression, expected }) => {
			expect.assertions(1)

			expect(ParseMathExpression(expression)).toBe(expected)
		}
	)
})
