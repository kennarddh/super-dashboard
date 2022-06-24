import React from 'react'

import Single from './Single/Single'

import { ClockContainer } from './Styles'

const AnalogClock = ({ offsets }) => {
	return (
		<ClockContainer>
			{offsets.map(offset => (
				<Single key={offset} offset={offset} />
			))}
		</ClockContainer>
	)
}

export default AnalogClock
