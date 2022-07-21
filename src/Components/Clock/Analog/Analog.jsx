import React, { useContext } from 'react'

import Single from './Single/Single'

import { LocationContext } from 'Contexts/Location'

import { ClockContainer } from './Styles'

const AnalogClock = ({ offsets, showRemoveModal }) => {
	const { TimezoneOffset } = useContext(LocationContext)

	return (
		<ClockContainer>
			<Single key={TimezoneOffset} offset={TimezoneOffset} />
			{offsets.map(offset => (
				<Single
					key={offset}
					offset={offset}
					showRemoveModal={showRemoveModal}
				/>
			))}
		</ClockContainer>
	)
}

export default AnalogClock
