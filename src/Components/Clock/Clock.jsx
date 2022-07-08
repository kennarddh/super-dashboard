import React, { useState } from 'react'

import ReactPortal from 'Components/ReactPortal/ReactPortal'

// Clock
import DigitalClock from './Digital/Digital'
// import AnalogClock from './Analog/Analog'

import {
	Container,
	AddButton,
	ModalContainer,
	ModalContentContainer,
	TimezoneInput,
	SubmitButton,
} from './Styles'

const Clock = () => {
	const [OffsetsInSecond] = useState([0, -25200, 25200])

	const [IsOpen, SetIsOpen] = useState(false)

	const OnAdd = () => {
		SetIsOpen(true)
	}

	// return <AnalogClock offsets={OffsetsInSecond} />
	return (
		<Container>
			<DigitalClock offsets={OffsetsInSecond} />
			<AddButton onClick={OnAdd}>Add</AddButton>
			<ReactPortal>
				{IsOpen && (
					<ModalContainer>
						<ModalContentContainer>
							<TimezoneInput placeholder='Timezone (/(GMT|UTC)[+-][0-2][0-3]:[0-5][0-9]/gi)' />
							<SubmitButton>Add</SubmitButton>
						</ModalContentContainer>
					</ModalContainer>
				)}
			</ReactPortal>
		</Container>
	)
}

export default Clock
