import Clamp from 'Utils/Clamp'

const CalculateLeafletCoordinate = value => {
	if (Math.abs(value % 360) === 0) return 0

	let mapCount = 0

	if ((Math.abs(value) + 180) % 360 === 0) {
		mapCount = Math.ceil(Math.abs(value) / 360) - 1
	} else {
		mapCount = Clamp(Math.round(Math.abs(value) / 360), 1, Infinity)
	}

	if (value > -180 && value < 180) return value

	let start

	if (value > 180) {
		start = 360 * mapCount - 180
	}

	if (value < -180) {
		start = -180 - 360 * mapCount
	}

	const offsetFromStart = value - start

	const result = -180 + offsetFromStart

	return result
}

export default CalculateLeafletCoordinate
