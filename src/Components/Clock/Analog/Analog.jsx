import React from 'react'

import Single from './Single/Single'

import { ClockContainer } from './Styles'

const AnalogClock = ({ time }) => {
	return (
		<ClockContainer>
			{Object.keys(time).map(timezone => (
				<Single key={timezone} time={time[timezone]} />
			))}
		</ClockContainer>
	)
}

export default AnalogClock
