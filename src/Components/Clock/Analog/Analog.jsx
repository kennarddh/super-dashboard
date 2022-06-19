import React from 'react'

import { Hand, HandContainer, Container, ClockContainer } from './Styles'

const AnalogClock = ({ time }) => {
	return (
		<ClockContainer>
			{Object.keys(time).map(timezone => (
				<Container key={timezone} size={100}>
					<HandContainer deg={(360 / 24) * time[timezone]?.hour}>
						<Hand width={3} height={30} color='#000000' />
					</HandContainer>
					<HandContainer deg={(360 / 60) * time[timezone]?.minute}>
						<Hand width={2} height={35} color='#000000' />
					</HandContainer>
					<HandContainer deg={(360 / 60) * time[timezone]?.second}>
						<Hand width={1} height={35} color='#ff0000' />
					</HandContainer>
				</Container>
			))}
		</ClockContainer>
	)
}

export default AnalogClock
