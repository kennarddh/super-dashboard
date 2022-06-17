import React from 'react'

import { Hand, HandContainer, Container } from './AnalogClockStyles'

const AnalogClock = () => {
	return (
		<Container size={200}>
			<HandContainer deg={0}>
				<Hand width={5} color='#ff0000' />
			</HandContainer>
			<HandContainer deg={45}>
				<Hand width={5} color='#00ff00' />
			</HandContainer>
			<HandContainer deg={90}>
				<Hand width={5} color='#0000ff' />
			</HandContainer>
		</Container>
	)
}

export default AnalogClock
