import React from 'react'

import {
	Hand,
	HandContainer,
	Container,
	ClockContainer,
} from './AnalogClockStyles'

const AnalogClock = ({ time }) => {
	return (
		<ClockContainer>
			{Object.keys(time).map(timezone => (
				<Container key={timezone} size={100}>
					<HandContainer deg={(360 / 24) * time[timezone]?.hour}>
						<Hand width={5} color='#ff0000' />
					</HandContainer>
					<HandContainer deg={(360 / 60) * time[timezone]?.minute}>
						<Hand width={5} color='#00ff00' />
					</HandContainer>
					<HandContainer deg={(360 / 60) * time[timezone]?.second}>
						<Hand width={5} color='#0000ff' />
					</HandContainer>
				</Container>
			))}
		</ClockContainer>
	)
}

export default AnalogClock
