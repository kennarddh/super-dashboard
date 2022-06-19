import React, { useState } from 'react'

// Clock
// import DigitalClock from './DigitalClock'
import AnalogClock from './Analog/Analog'

const Clock = () => {
	const [Timezones] = useState([
		'UTC+2',
		'UTC+3',
		'UTC+4',
		'UTC+5',
		'UTC+6',
		'UTC+7',
	])

	return <AnalogClock timezones={Timezones} />
	// return <DigitalClock time={Time} />
}

export default Clock
