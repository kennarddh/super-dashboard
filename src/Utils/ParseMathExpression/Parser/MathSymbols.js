import Symbols from 'Constants/Math/Symbols'

const MathSymbols = expression =>
	Object.entries(Symbols)
		.reduce(
			(acc, [alias, { value }]) =>
				acc.replaceAll(
					new RegExp(
						`([^a-zA-Z0-9]${alias}[^a-zA-Z0-9]|${alias} | ${alias} | ${alias}|(^${alias}$))`,
						'g'
					),
					` ${value()} `
				),
			expression
		)
		.trim()

export default MathSymbols
