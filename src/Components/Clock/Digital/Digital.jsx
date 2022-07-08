import React, { useContext } from 'react'

import Single from './Single/Single'

import { TimeContainerParent } from './Styles'

import { LocationContext } from 'Contexts/Location'

const DigitalClock = ({ offsets }) => {
	const { TimezoneOffset } = useContext(LocationContext)

	return (
		<TimeContainerParent>
			<Single key={TimezoneOffset} offset={TimezoneOffset} />
			{offsets.map(offset => (
				<Single key={offset} offset={offset} />
			))}
		</TimeContainerParent>
	)
}

export default DigitalClock
