import React, { useEffect, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import ReactPortal from 'Components/ReactPortal/ReactPortal'

import { LowercaseAlphabet } from 'Constants/Users/Alphabet'

import FileToBase64 from 'Utils/FileToBase64'

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
	Buttons,
	ContentContainer,
	AlphabetList,
	AlphabetItem,
	LetterTitle,
	ImagePreview,
} from './Styles'

const Users = () => {
	const [UsersList, SetUsersList] = useState({
		'1896d3ba-715a-47a0-a4e9-c746b69589a2': {
			name: 'Foo',
			phone: '111122223333',
			address: '4276 Katanga Dr N, Jacksonville, FL 32209',
		},
		'8fdac97d-4a7f-452f-9e74-77bd652ed731': {
			name: 'Bar',
			phone: '444455556666',
			address: '821 N Jefferson St, Jacksonville, FL 32202',
		},
		'7e5da25b-bcde-41bc-91f8-932606080675': {
			name: 'Foo Bar',
			phone: '777788889999',
			address: '308 N Julia St, Jacksonville, FL 32202',
		},
	})

	const [UsersPreview, SetUsersPreview] = useState({})

	const [IsUserModalOpen, SetIsUserModalOpen] = useState(false)

	const [NameValue, SetNameValue] = useState('')
	const [PhoneValue, SetPhoneValue] = useState('')
	const [AddressValue, SetAddressValue] = useState('')
	const [ImagePreviewBase64, SetImagePreviewBase64] = useState('')

	const [SearchValue, SetSearchValue] = useState('')

	const [SelectedUserId, SetSelectedUserId] = useState()

	useEffect(() => {
		const usersEntries = Object.entries(UsersList)

		const filtered = usersEntries.filter(user =>
			user[1].name.toLowerCase().includes(SearchValue.toLowerCase())
		)

		const grouped = filtered.reduce((acc, user) => {
			const key = LowercaseAlphabet.includes(
				user[1].name[0].toLowerCase()
			)
				? user[1].name[0].toLowerCase()
				: '#'

			if (!Object.keys(acc).includes(key)) {
				acc[key] = {}
			}

			acc[key] = {
				...acc[key],
				[user[0]]: user[1],
			}

			return acc
		}, {})

		SetUsersPreview(grouped)
	}, [SearchValue, UsersList])

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

		if (!NameValue) {
			alert('Name cannot be empty')

			HideUserModal()

			return
		}

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

	const RemoveUser = () => {
		if (!SelectedUserId) return

		SetUsersList(users => {
			// eslint-disable-next-line no-unused-vars
			const { [SelectedUserId]: _, ...withoutSelected } = users

			return withoutSelected
		})

		HideUserModal()
	}

	return (
		<Container>
			<Header>
				<Input
					value={SearchValue}
					onChange={event => SetSearchValue(event.target.value)}
					placeholder='Search'
				/>
				<AddButton onClick={ShowUserModal}>Add</AddButton>
			</Header>
			<ContentContainer>
				<ListContainer>
					{Object.keys(UsersPreview).map(letter => (
						<div key={letter} id={`users-list-${letter}`}>
							<LetterTitle>{letter.toUpperCase()}</LetterTitle>
							{Object.keys(UsersPreview[letter]).map(id => (
								<ListItem
									key={id}
									onClick={() => SelectUser(id)}
								>
									<p>{UsersPreview[letter][id].name}</p>
								</ListItem>
							))}
						</div>
					))}
				</ListContainer>
				<AlphabetList>
					{Object.keys(UsersPreview).map(letter => (
						<AlphabetItem
							key={letter}
							href={`#users-list-${letter}`}
						>
							{letter}
						</AlphabetItem>
					))}
				</AlphabetList>
			</ContentContainer>
			<ReactPortal wrapperId='user-modal'>
				{IsUserModalOpen && (
					<ModalContainer>
						<ModalContentContainer onSubmit={AddUser}>
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
								<CloseButton
									type='button'
									onClick={HideUserModal}
								>
									Close
								</CloseButton>
								{SelectedUserId && (
									<CloseButton
										type='button'
										onClick={RemoveUser}
									>
										Remove
									</CloseButton>
								)}
							</Buttons>
						</ModalContentContainer>
					</ModalContainer>
				)}
			</ReactPortal>
		</Container>
	)
}

export default Users
