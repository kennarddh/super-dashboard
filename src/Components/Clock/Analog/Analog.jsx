import React from 'react'

import Single from './Single/Single'

import { ClockContainer } from './Styles'

const AnalogClock = ({ timezones }) => {
	return (
		<ClockContainer>
			{timezones.map(timezone => (
				<Single key={timezone} timezone={timezone} />
			))}
		</ClockContainer>
	)
}

export default AnalogClock
