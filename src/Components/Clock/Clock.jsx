import React, { useState } from 'react'

// Clock
import DigitalClock from './Digital/Digital'
// import AnalogClock from './Analog/Analog'

const Clock = () => {
	const [Timezones] = useState([
		'UTC+2',
		'UTC+3',
		'UTC+4',
		'UTC+5',
		'UTC+6',
		'UTC+7',
	])

	// return <AnalogClock timezones={Timezones} />
	return <DigitalClock timezones={Timezones} />
}

export default Clock
