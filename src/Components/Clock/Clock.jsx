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
	const [TimezoneText, SetTimezoneText] = useState('')

	const OnAdd = () => {
		SetIsOpen(true)
	}

	const OnInputChange = event => {
		SetTimezoneText(event.target.value)
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
							<TimezoneInput
								onChange={OnInputChange}
								value={TimezoneText}
								placeholder='Timezone (/(GMT|UTC)[+-][0-2][0-3]:[0-5][0-9]/gi)'
							/>
							<SubmitButton type='submit'>Add</SubmitButton>
						</ModalContentContainer>
					</ModalContainer>
				)}
			</ReactPortal>
		</Container>
	)
}

export default Clock
