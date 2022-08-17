import React, { useEffect, useState, useRef, forwardRef } from 'react'

import ModalComponent from 'Components/Modal/Modal'

import FileToBase64 from 'Utils/FileToBase64'

import Input from 'Components/Input/Input'
import RectangleButton from 'Components/Button/Rectangle/Rectangle'

import { Buttons, ImagePreview } from './Styles'

const Modal = (
	{ addUser, selectedUserId, removeUser, getUserDataById, onClose },
	ref
) => {
	const [NameValue, SetNameValue] = useState('')
	const [PhoneValue, SetPhoneValue] = useState('')
	const [AddressValue, SetAddressValue] = useState('')
	const [ImagePreviewBase64, SetImagePreviewBase64] = useState('')

	const ModalComponentRef = useRef()

	useEffect(() => {
		if (!selectedUserId) return

		const data = getUserDataById(selectedUserId)

		SetNameValue(data.name)
		SetPhoneValue(data.phone)
		SetAddressValue(data.address)
		SetImagePreviewBase64(data.image)
	}, [getUserDataById, selectedUserId])

	const OnClose = () => {
		SetNameValue('')
		SetPhoneValue('')
		SetAddressValue('')
		SetImagePreviewBase64('')
	}

	const HideModal = () => {
		OnClose()

		Close()
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

	const Close = () => {
		onClose()

		ModalComponentRef.current?.Close()
	}

	return (
		<ModalComponent
			wrapperId='user-modal'
			ref={modalRef => {
				ModalComponentRef.current = modalRef

				ref.current = {
					Open: modalRef?.Open,
				}
			}}
			contentProps={{
				onSubmit: OnSubmit,
				as: 'form',
				height: '80%',
				width: '50%',
			}}
			onClose={OnClose}
		>
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
				onChange={event => SetPhoneValue(event.target.value)}
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
				accept='image/*'
			/>
			<Input
				value={AddressValue}
				onChange={event => SetAddressValue(event.target.value)}
				as='textarea'
				rows={3}
				placeholder='Address'
				style={{ height: '70%' }}
			></Input>
			<Buttons>
				<RectangleButton
					width='50%'
					height='100%'
					radius={15}
					padding='5px 20px'
					backgroundColor='#b6b6b6'
					type='submit'
				>
					Save
				</RectangleButton>
				<RectangleButton
					width='50%'
					height='100%'
					radius={15}
					padding='5px 20px'
					backgroundColor='#b6b6b6'
					as='a'
					href={`https://wa.me/${PhoneValue}`}
					target='_blank'
				>
					Whatsapp
				</RectangleButton>
				<RectangleButton
					width='50%'
					height='100%'
					radius={15}
					padding='5px 20px'
					backgroundColor='#ff0000'
					type='button'
					onClick={HideModal}
				>
					Close
				</RectangleButton>
				{selectedUserId && (
					<RectangleButton
						width='50%'
						height='100%'
						radius={15}
						padding='5px 20px'
						backgroundColor='#ff0000'
						type='button'
						onClick={RemoveUser}
					>
						Remove
					</RectangleButton>
				)}
			</Buttons>
		</ModalComponent>
	)
}

export default forwardRef(Modal)
