import React, { useState } from 'react'

// Clock
import DigitalClock from './Digital/Digital'
// import AnalogClock from './Analog/Analog'

const Clock = () => {
	const [Offsets] = useState([0, -25200])

	// return <AnalogClock offsets={Offsets} />
	return <DigitalClock offsets={Offsets} />
}

export default Clock
