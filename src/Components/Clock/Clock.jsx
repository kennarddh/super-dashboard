import React, { useState } from 'react'

import ReactPortal from 'Components/ReactPortal/ReactPortal'

import TimezoneTextToOffsetInSecond from 'Utils/TimezoneTextToOffsetInSecond'
import IsValidTimezoneText from 'Utils/IsValidTimezoneText'

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
	CloseButton,
} from './Styles'

const Clock = () => {
	const [OffsetsInSecond, SetOffsetsInSecond] = useState([])

	const [IsOpen, SetIsOpen] = useState(false)
	const [TimezoneText, SetTimezoneText] = useState('')

	const OnOpen = () => {
		SetIsOpen(true)
	}

	const OnInputChange = event => {
		SetTimezoneText(event.target.value)
	}

	const OnClose = () => {
		SetIsOpen(false)
	}

	const OnSubmit = event => {
		event.preventDefault()

		SetIsOpen(false)

		if (OffsetsInSecond.length >= 5)
			return alert('Too many clock maximum 5')

		const timezoneText = TimezoneText.toLowerCase()

		SetTimezoneText('')

		if (!IsValidTimezoneText(timezoneText)) return alert('Invalid timezone')

		const offset = TimezoneTextToOffsetInSecond(timezoneText)

		if (OffsetsInSecond.includes(offset))
			return alert('Timezone already exist')

		SetOffsetsInSecond(offsetsInSecond => [...offsetsInSecond, offset])
	}

	// return <AnalogClock offsets={OffsetsInSecond} />
	return (
		<Container>
			<DigitalClock offsets={OffsetsInSecond} />
			<AddButton onClick={OnOpen}>Add</AddButton>
			<ReactPortal>
				{IsOpen && (
					<ModalContainer>
						<ModalContentContainer onSubmit={OnSubmit}>
							<TimezoneInput
								onChange={OnInputChange}
								value={TimezoneText}
								placeholder='Timezone (/^(GMT|UTC)[+-][0-2][0-3]:[0-5][0-9]$/gi)'
							/>
							<SubmitButton type='submit'>Add</SubmitButton>
							<CloseButton type='button' onClick={OnClose}>
								Close
							</CloseButton>
						</ModalContentContainer>
					</ModalContainer>
				)}
			</ReactPortal>
		</Container>
	)
}

export default Clock
