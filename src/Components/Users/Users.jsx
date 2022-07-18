import React, { useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import ReactPortal from 'Components/ReactPortal/ReactPortal'

import {
	ListContainer,
	ListItem,
	AddButton,
	Header,
	Container,
	ModalContainer,
	ModalContentContainer,
	SubmitButton,
	CloseButton,
	Input,
} from './Styles'

const Users = () => {
	const [UsersList, SetUsersList] = useState([
		{
			id: '1896d3ba-715a-47a0-a4e9-c746b69589a2',
			name: 'Foo',
			phone: '111122223333',
			address: '4276 Katanga Dr N, Jacksonville, FL 32209',
		},
		{
			id: '8fdac97d-4a7f-452f-9e74-77bd652ed731',
			name: 'Bar',
			phone: '444455556666',
			address: '821 N Jefferson St, Jacksonville, FL 32202',
		},
		{
			id: '7e5da25b-bcde-41bc-91f8-932606080675',
			name: 'Foo Bar',
			phone: '777788889999',
			address: '308 N Julia St, Jacksonville, FL 32202',
		},
	])

	const [IsUserModalOpen, SetIsUserModalOpen] = useState(false)

	const [NameValue, SetNameValue] = useState('')
	const [PhoneValue, SetPhoneValue] = useState('')
	const [AddressValue, SetAddressValue] = useState('')

	const [SelectedUserId, SetSelectedUserId] = useState()

	const ShowUserModal = () => {
		SetIsUserModalOpen(true)
	}

	const HideUserModal = () => {
		SetNameValue('')
		SetPhoneValue('')
		SetAddressValue('')

		SetSelectedUserId(null)

		SetIsUserModalOpen(false)
	}

	const AddUser = event => {
		event.preventDefault()

		if (SelectedUserId) {
			SetUsersList(users => ({
				...users,
				[SelectedUserId]: {
					name: NameValue,
					phone: PhoneValue,
					address: AddressValue,
				},
			}))
		} else {
			SetUsersList(users => ({
				...users,
				[uuidv4()]: {
					name: NameValue,
					phone: PhoneValue,
					address: AddressValue,
				},
			}))
		}

		HideUserModal()
	}

	const SelectUser = id => {
		SetSelectedUserId(id)

		const user = UsersList[id]

		SetNameValue(user.name)
		SetPhoneValue(user.phone)
		SetAddressValue(user.address)

		ShowUserModal()
	}

	return (
		<Container>
			<Header>
				<AddButton onClick={ShowUserModal}>Add</AddButton>
			</Header>
			<ListContainer>
				{Object.keys(UsersList).map(id => (
					<ListItem key={id} onClick={() => SelectUser(id)}>
						<p>{UsersList[id].name}</p>
					</ListItem>
				))}
			</ListContainer>
			<ReactPortal wrapperId='user-modal'>
				{IsUserModalOpen && (
					<ModalContainer>
						<ModalContentContainer onSubmit={AddUser}>
							<h3>Add user</h3>
							<Input
								value={NameValue}
								onChange={event =>
									SetNameValue(event.target.value)
								}
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
								value={AddressValue}
								onChange={event =>
									SetAddressValue(event.target.value)
								}
								as='textarea'
								rows={3}
								placeholder='Address'
								style={{ height: '70%' }}
							></Input>
							<SubmitButton type='submit'>Save</SubmitButton>
							<CloseButton type='button' onClick={HideUserModal}>
								Close
							</CloseButton>
						</ModalContentContainer>
					</ModalContainer>
				)}
			</ReactPortal>
		</Container>
	)
}

export default Users
