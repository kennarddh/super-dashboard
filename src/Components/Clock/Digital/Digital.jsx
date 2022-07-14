import React, { useContext } from 'react'

import Single from './Single/Single'

import { TimeContainerParent } from './Styles'

import { LocationContext } from 'Contexts/Location'

const DigitalClock = ({ offsets, showRemoveModal }) => {
	const { TimezoneOffset } = useContext(LocationContext)

	return (
		<TimeContainerParent>
			<Single key={TimezoneOffset} offset={TimezoneOffset} />
			{offsets.map(offset => (
				<Single
					key={offset}
					offset={offset}
					showRemoveModal={showRemoveModal}
				/>
			))}
		</TimeContainerParent>
	)
}

export default DigitalClock
