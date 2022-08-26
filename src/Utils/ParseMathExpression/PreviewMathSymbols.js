import Symbols from 'Constants/Math/Symbols'

const PreviewMathSymbols = expression =>
	Object.entries(Symbols).reduce(
		(acc, [alias, symbol]) => acc.replaceAll(alias, symbol),
		expression
	)

export default PreviewMathSymbols
