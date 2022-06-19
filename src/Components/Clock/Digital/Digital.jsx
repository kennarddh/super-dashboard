import React from 'react'

import { TimeContainer, TimeText, TimeContainerParent } from './Styles.jsx'

const DigitalClock = ({ time }) => {
	return (
		<TimeContainerParent>
			{Object.keys(time).map(timezone => (
				<TimeContainer key={timezone}>
					<TimeText>{time[timezone]?.hour}</TimeText>
					<TimeText>{time[timezone]?.minute}</TimeText>
					<TimeText>{time[timezone]?.second}</TimeText>
				</TimeContainer>
			))}
		</TimeContainerParent>
	)
}

export default DigitalClock
