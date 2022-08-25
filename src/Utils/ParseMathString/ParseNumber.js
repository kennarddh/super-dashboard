const ParseNumber = noStr => {
	const isMinus = noStr.trim().slice(0, 5) === 'minus'

	return isMinus
		? parseFloat(noStr.trim().slice(6, noStr.length - 1), 10) * -1
		: parseFloat(noStr, 10)
}

export default ParseNumber
