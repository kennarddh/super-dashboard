import React, { useState, useEffect } from 'react'

import ReactPortal from 'Components/ReactPortal/ReactPortal'
import RoundButton from 'Components/Button/Round/Round'
import RectangleButton from 'Components/Button/Rectangle/Rectangle'

import TimezoneTextToOffsetInSecond from 'Utils/TimezoneTextToOffsetInSecond'
import IsValidTimezoneText from 'Utils/IsValidTimezoneText'

// Clock
import DigitalClock from './Digital/Digital'
import AnalogClock from './Analog/Analog'

import {
	Container,
	ModalContainer,
	ModalContentContainer,
	TimezoneInput,
} from './Styles'

const Clock = () => {
	const [OffsetsInSecond, SetOffsetsInSecond] = useState([])

	const [IsOpen, SetIsOpen] = useState(false)
	const [IsRemoveModalOpen, SetIsRemoveModalOpen] = useState(false)
	const [TimezoneText, SetTimezoneText] = useState('')
	const [CurrentRemoveOffset, SetCurrentRemoveOffset] = useState(0)

	const [IsDigital, SetIsDigital] = useState(false)

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

		SetOffsetsInSecond(offsetsInSecond => {
			const newOffsets = [
				...offsetsInSecond.slice(0, indexToRemove),
				...offsetsInSecond.slice(indexToRemove + 1),
			]

			localStorage.setItem(
				'clock_offsets_data',
				JSON.stringify(newOffsets)
			)

			return newOffsets
		})

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

		SetOffsetsInSecond(offsetsInSecond => {
			const newOffsets = [...offsetsInSecond, offset]

			localStorage.setItem(
				'clock_offsets_data',
				JSON.stringify(newOffsets)
			)

			return newOffsets
		})
	}

	const Toggle = () => {
		SetIsDigital(isDigital => {
			const newValue = !isDigital

			localStorage.setItem(
				'clock_is_digital',
				JSON.stringify({ value: newValue })
			)

			return newValue
		})
	}

	useEffect(() => {
		SetOffsetsInSecond(
			JSON.parse(localStorage.getItem('clock_offsets_data')) || []
		)

		SetIsDigital(
			JSON.parse(localStorage.getItem('clock_is_digital')).value || false
		)
	}, [])

	return (
		<Container>
			{IsDigital ? (
				<DigitalClock
					offsets={OffsetsInSecond}
					showRemoveModal={ShowRemoveModal}
				/>
			) : (
				<AnalogClock
					offsets={OffsetsInSecond}
					showRemoveModal={ShowRemoveModal}
				/>
			)}
			<RoundButton bottom={20} size={50} right={20} onClick={OnOpen}>
				Add
			</RoundButton>
			<RoundButton bottom={80} size={50} right={20} onClick={Toggle}>
				{IsDigital ? 'Analog' : 'Digital'}
			</RoundButton>
			<ReactPortal wrapperId='add-clock-timezone'>
				{IsOpen && (
					<ModalContainer>
						<ModalContentContainer onSubmit={OnSubmit}>
							<TimezoneInput
								onChange={OnInputChange}
								value={TimezoneText}
								placeholder='Timezone (/^(GMT|UTC)[+-]([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/gi)'
							/>
							<RectangleButton
								width='10%'
								height='40%'
								radius={15}
								type='submit'
							>
								Add
							</RectangleButton>
							<RectangleButton
								backgroundColor='#ff0000'
								width='10%'
								height='40%'
								radius={15}
								type='button'
								onClick={OnClose}
							>
								Close
							</RectangleButton>
						</ModalContentContainer>
					</ModalContainer>
				)}
			</ReactPortal>
			<ReactPortal wrapperId='remove-clock-timezone'>
				{IsRemoveModalOpen && (
					<ModalContainer>
						<ModalContentContainer onSubmit={RemoveClock}>
							<h3>Remove Timezone</h3>
							<RectangleButton
								width='10%'
								height='40%'
								radius={15}
								type='submit'
							>
								Remove
							</RectangleButton>
							<RectangleButton
								backgroundColor='#ff0000'
								width='10%'
								height='40%'
								radius={15}
								type='button'
								onClick={OnRemoveModalClose}
							>
								Close
							</RectangleButton>
						</ModalContentContainer>
					</ModalContainer>
				)}
			</ReactPortal>
		</Container>
	)
}

export default Clock
