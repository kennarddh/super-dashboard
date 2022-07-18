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
		{ id: '1896d3ba-715a-47a0-a4e9-c746b69589a2', name: 'Foo' },
		{ id: '8fdac97d-4a7f-452f-9e74-77bd652ed731', name: 'Bar' },
		{ id: '7e5da25b-bcde-41bc-91f8-932606080675', name: 'Foo Bar' },
	])

	const [IsAddUserModalOpen, SetIsAddUserModalOpen] = useState(false)

	const [NameValue, SetNameValue] = useState('')
	const [PhoneValue, SetPhoneValue] = useState('')
	const [AddressValue, SetAddressValue] = useState('')

	const ShowAddUserModal = () => {
		SetIsAddUserModalOpen(true)
	}

	const HideAddUserModal = () => {
		SetIsAddUserModalOpen(false)
	}

	const AddUser = event => {
		event.preventDefault()

		SetUsersList(users => [
			...users,
			{
				id: uuidv4(),
				name: NameValue,
				phone: PhoneValue,
				address: AddressValue,
			},
		])

		SetNameValue('')
		SetPhoneValue('')
		SetAddressValue('')

		HideAddUserModal()
	}

	return (
		<Container>
			<Header>
				<AddButton onClick={ShowAddUserModal}>Add</AddButton>
			</Header>
			<ListContainer>
				{UsersList.map(user => (
					<ListItem key={user.id}>
						<p>{user.name}</p>
					</ListItem>
				))}
			</ListContainer>
			<ReactPortal wrapperId='remove-clock-timezone'>
				{IsAddUserModalOpen && (
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
							<CloseButton
								type='button'
								onClick={HideAddUserModal}
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

export default Users
