import Symbols from 'Constants/Math/Symbols'

const MathSymbols = expression =>
	Object.entries(Symbols).reduce(
		(acc, [alias, { value }]) => acc.replaceAll(alias, value().toString()),
		expression
	)

export default MathSymbols
