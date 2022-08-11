import React, { useEffect, useState, useRef } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { LowercaseAlphabet } from 'Constants/Users/Alphabet'

import Input from 'Components/Input/Input'
import RectangleButton from 'Components/Button/Rectangle/Rectangle'

import useLocalStorageState from 'Hooks/useLocalStorageState'

import Modal from './Modal/Modal'

import {
	ListContainer,
	ListItem,
	Header,
	Container,
	ContentContainer,
	AlphabetList,
	AlphabetItem,
	LetterTitle,
} from './Styles'

const Users = () => {
	const [UsersList, SetUsersList] = useLocalStorageState(
		{
			'1896d3ba-715a-47a0-a4e9-c746b69589a2': {
				name: 'Foo',
				phone: '111122223333',
				address: '4276 Katanga Dr N, Jacksonville, FL 32209',
				image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
			},
			'8fdac97d-4a7f-452f-9e74-77bd652ed731': {
				name: 'Bar',
				phone: '444455556666',
				address: '821 N Jefferson St, Jacksonville, FL 32202',
				image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
			},
			'7e5da25b-bcde-41bc-91f8-932606080675': {
				name: 'Foo Bar',
				phone: '777788889999',
				address: '308 N Julia St, Jacksonville, FL 32202',
				image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
			},
		},
		'users_data'
	)

	const [UsersPreview, SetUsersPreview] = useState({})

	const [SearchValue, SetSearchValue] = useState('')

	const [SelectedUserId, SetSelectedUserId] = useState()

	const ModalRef = useRef()

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
		ModalRef.current?.Open()
	}

	const AddUser = ({ name, phone, address, image }) => {
		SetUsersList(users => {
			const key = SelectedUserId || uuidv4()

			return {
				...users,
				[key]: {
					name,
					phone,
					address,
					image,
				},
			}
		})
	}

	const SelectUser = id => {
		SetSelectedUserId(id)

		ShowUserModal()
	}

	const RemoveUser = () => {
		if (!SelectedUserId) return

		SetUsersList(users => {
			// eslint-disable-next-line no-unused-vars
			const { [SelectedUserId]: _, ...withoutSelected } = users

			return withoutSelected
		})
	}

	const GetUserDataById = id => UsersList[id]

	return (
		<Container>
			<Header>
				<Input
					value={SearchValue}
					onChange={event => SetSearchValue(event.target.value)}
					placeholder='Search'
				/>
				<RectangleButton
					backgroundColor='#dbdbdb'
					radius={15}
					width={50}
					height={20}
					centerContent
					onClick={ShowUserModal}
				>
					Add
				</RectangleButton>
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
			<Modal
				ref={ModalRef}
				addUser={AddUser}
				onClose={() => {
					SetSelectedUserId(null)
				}}
				selectedUserId={SelectedUserId}
				removeUser={RemoveUser}
				getUserDataById={GetUserDataById}
			/>
		</Container>
	)
}

export default Users
