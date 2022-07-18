import React, { useState } from 'react'

import { ListContainer, ListItem } from './Styles'

const Users = () => {
	const [UsersList] = useState([
		{ id: '1896d3ba-715a-47a0-a4e9-c746b69589a2', name: 'Foo' },
		{ id: '8fdac97d-4a7f-452f-9e74-77bd652ed731', name: 'Bar' },
		{ id: '7e5da25b-bcde-41bc-91f8-932606080675', name: 'Foo Bar' },
	])
	return (
		<ListContainer>
			{UsersList.map(user => (
				<ListItem key={user.id}>
					<p>{user.name}</p>
				</ListItem>
			))}
		</ListContainer>
	)
}

export default Users
