import ParseMathExpression from './ParseMathExpression'

describe('ParseMathExpression', () => {
	it.each([
		{ expresion: '10+20', expected: 30 },
		{ expresion: '(10+10*10)^2', expected: 12100 },
		{ expresion: '20+ 10 - 80 * 10', expected: -770 },
		{ expresion: '20*10+10 /20 ', expected: 200.5 },
		{ expresion: '(10 + 10) * 10', expected: 200 },
		{ expresion: '10 - 20 + 10', expected: 0 },
		{ expresion: '30 + (10 * 2)^3', expected: 8030 },
		{ expresion: '0.5 + 0.5', expected: 1 },
		{ expresion: '0.5 * 3 + 10', expected: 11.5 },
		{
			expresion: '30^2 * 10 / 20 +10 *20*(10- 20 *3)  + (10^4 + 10) + 10',
			expected: 470,
		},
		{ expresion: '3^2^2', expected: 81 },
		{
			expresion: '10 * (10 + (10 / 100 )) + (10 * (10 - 20))',
			expected: 1,
		},
	])(
		'Should success, Expresion: $expresion, expected: $expected',
		({ expresion, expected }) => {
			expect.assertions(1)

			expect(ParseMathExpression(expresion)).toBe(expected)
		}
	)
})
