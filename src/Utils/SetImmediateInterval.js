const SetImmediateInterval = (callback, ms) => {
	callback()

	return setInterval(callback, ms)
}

export default SetImmediateInterval
