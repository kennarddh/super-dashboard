import React from 'react'

import Single from './Single/Single'

import { TimeContainerParent } from './Styles.jsx'

const DigitalClock = ({ timezones }) => {
	return (
		<TimeContainerParent>
			{timezones.map(timezone => (
				<Single key={timezone} timezone={timezone} />
			))}
		</TimeContainerParent>
	)
}

export default DigitalClock
