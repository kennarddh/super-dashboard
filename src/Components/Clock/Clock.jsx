import React, { useState } from 'react'

import ReactPortal from 'Components/ReactPortal/ReactPortal'

import TimezoneTextToOffsetInSecond from 'Utils/TimezoneTextToOffsetInSecond'
import IsValidTimezoneText from 'Utils/IsValidTimezoneText'

// Clock
// import DigitalClock from './Digital/Digital'
import AnalogClock from './Analog/Analog'

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
	const [IsRemoveModalOpen, SetIsRemoveModalOpen] = useState(false)
	const [TimezoneText, SetTimezoneText] = useState('')
	const [CurrentRemoveOffset, SetCurrentRemoveOffset] = useState(0)

	const OnOpen = () => {
		SetIsOpen(true)
	}

	const OnInputChange = event => {
		SetTimezoneText(event.target.value)
	}

	const OnClose = () => {
		SetIsOpen(false)
	}

	const OnRemoveModalClose = () => {
		SetIsRemoveModalOpen(false)
	}

	const ShowRemoveModal = offset => {
		SetIsRemoveModalOpen(true)

		SetCurrentRemoveOffset(offset)
	}

	const RemoveClock = event => {
		event.preventDefault()

		SetIsRemoveModalOpen(false)

		const indexToRemove = OffsetsInSecond.indexOf(CurrentRemoveOffset)

		if (indexToRemove === -1) return

		SetOffsetsInSecond(offsetsInSecond => [
			...offsetsInSecond.slice(0, indexToRemove),
			...offsetsInSecond.slice(indexToRemove + 1),
		])

		SetCurrentRemoveOffset(0)
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
			{/* <DigitalClock
				offsets={OffsetsInSecond}
				showRemoveModal={ShowRemoveModal}
			/> */}
			<AnalogClock
				offsets={OffsetsInSecond}
				showRemoveModal={ShowRemoveModal}
			/>
			<AddButton onClick={OnOpen}>Add</AddButton>
			<ReactPortal wrapperId='add-clock-timezone'>
				{IsOpen && (
					<ModalContainer>
						<ModalContentContainer onSubmit={OnSubmit}>
							<TimezoneInput
								onChange={OnInputChange}
								value={TimezoneText}
								placeholder='Timezone (/^(GMT|UTC)[+-]([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/gi)'
							/>
							<SubmitButton type='submit'>Add</SubmitButton>
							<CloseButton type='button' onClick={OnClose}>
								Close
							</CloseButton>
						</ModalContentContainer>
					</ModalContainer>
				)}
			</ReactPortal>
			<ReactPortal wrapperId='remove-clock-timezone'>
				{IsRemoveModalOpen && (
					<ModalContainer>
						<ModalContentContainer onSubmit={RemoveClock}>
							<h3>Remove Timezone</h3>
							<SubmitButton type='submit'>Remove</SubmitButton>
							<CloseButton
								type='button'
								onClick={OnRemoveModalClose}
							>
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
