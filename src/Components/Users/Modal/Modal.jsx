import React, { useEffect, useState } from 'react'

import ReactPortal from 'Components/ReactPortal/ReactPortal'

import FileToBase64 from 'Utils/FileToBase64'

import Input from 'Components/Input/Input'

import {
	ModalContainer,
	ModalContentContainer,
	SubmitButton,
	CloseButton,
	Buttons,
	ImagePreview,
} from './Styles'

const Modal = ({
	isOpen,
	addUser,
	closeModal,
	selectedUserId,
	removeUser,
	getUserDataById,
}) => {
	const [NameValue, SetNameValue] = useState('')
	const [PhoneValue, SetPhoneValue] = useState('')
	const [AddressValue, SetAddressValue] = useState('')
	const [ImagePreviewBase64, SetImagePreviewBase64] = useState('')

	useEffect(() => {
		if (!selectedUserId) return

		const data = getUserDataById(selectedUserId)

		SetNameValue(data.name)
		SetPhoneValue(data.phone)
		SetAddressValue(data.address)
		SetImagePreviewBase64(data.image)
	}, [getUserDataById, selectedUserId])

	const HideModal = () => {
		SetNameValue('')
		SetPhoneValue('')
		SetAddressValue('')
		SetImagePreviewBase64('')

		closeModal()
	}

	const RemoveUser = () => {
		HideModal()

		removeUser()
	}

	const OnSubmit = event => {
		event.preventDefault()

		HideModal()

		if (!NameValue) {
			alert('Name cannot be empty')

			return
		}

		addUser({
			name: NameValue,
			phone: PhoneValue,
			address: AddressValue,
			image: ImagePreviewBase64,
		})
	}

	return (
		<ReactPortal wrapperId='user-modal'>
			{isOpen && (
				<ModalContainer>
					<ModalContentContainer onSubmit={OnSubmit}>
						<h3>Add user</h3>
						<ImagePreview
							src={
								ImagePreviewBase64 ||
								'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='
							}
							alt='Image preview'
						/>
						<Input
							value={NameValue}
							onChange={event => SetNameValue(event.target.value)}
							placeholder='Name'
						/>
						<Input
							value={PhoneValue}
							onChange={event =>
								SetPhoneValue(event.target.value)
							}
							placeholder='Phone'
						/>
						<Input
							onChange={event =>
								FileToBase64(event.target.files[0])
									.then(base64 => {
										SetImagePreviewBase64(base64)
									})
									.catch(console.error)
							}
							type='file'
							placeholder='Image'
						/>
						<Input
							value={AddressValue}
							onChange={event =>
								SetAddressValue(event.target.value)
							}
							as='textarea'
							rows={3}
							placeholder='Address'
							style={{ height: '70%' }}
						></Input>
						<Buttons>
							<SubmitButton type='submit'>Save</SubmitButton>
							<CloseButton type='button' onClick={closeModal}>
								Close
							</CloseButton>
							{selectedUserId && (
								<CloseButton type='button' onClick={RemoveUser}>
									Remove
								</CloseButton>
							)}
						</Buttons>
					</ModalContentContainer>
				</ModalContainer>
			)}
		</ReactPortal>
	)
}

export default Modal
