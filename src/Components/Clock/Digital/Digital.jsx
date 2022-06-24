import React from 'react'

import Single from './Single/Single'

import { TimeContainerParent } from './Styles.jsx'

const DigitalClock = ({ offsets }) => {
	return (
		<TimeContainerParent>
			{offsets.map(offset => (
				<Single key={offset} offset={offset} />
			))}
		</TimeContainerParent>
	)
}

export default DigitalClock
