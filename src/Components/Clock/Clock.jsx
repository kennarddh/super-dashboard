import React, { useState } from 'react'

// Clock
import DigitalClock from './Digital/Digital'
// import AnalogClock from './Analog/Analog'

import { Container, AddButton } from './Styles'

const Clock = () => {
	const [OffsetsInSecond] = useState([0, -25200, 25200])

	// return <AnalogClock offsets={OffsetsInSecond} />
	return (
		<Container>
			<DigitalClock offsets={OffsetsInSecond} />
			<AddButton>Add</AddButton>
		</Container>
	)
}

export default Clock
