const ReplaceMinus = expression =>
	expression.replaceAll(
		/\(-\d+\)/g,
		numberString => `minus_${numberString.slice(2).slice(0, -1)}`
	)

export default ReplaceMinus
