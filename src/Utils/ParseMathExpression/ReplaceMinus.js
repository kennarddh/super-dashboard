import Symbols from 'Constants/Math/Symbols'

const ReplaceMinus = expression =>
	expression.replace(
		new RegExp(
			`\\((-\\d+)|${Object.keys(Symbols)
				.map(str => `(\\(-${str}\\))`)
				.join('|')}\\)`,
			'g'
		),
		numberString => `minus_${numberString.slice(2, -1)}`
	)

export default ReplaceMinus
