import Symbols from 'Constants/Math/Symbols'

const MathSymbols = expression =>
	Object.entries(Symbols)
		.reduce(
			(acc, [alias, { symbol }]) =>
				acc.replace(
					new RegExp(
						`([^a-zA-Z0-9]${alias}[^a-zA-Z0-9]|${alias} | ${alias} | ${alias}|(^${alias}$))`,
						'g'
					),
					` ${symbol} `
				),
			expression
		)
		.trim()

export default MathSymbols
