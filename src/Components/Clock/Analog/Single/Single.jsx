import React from 'react'

import { Container, HandContainer, Hand } from './Styles'

const Single = ({ time }) => {
	return (
		<Container size={100}>
			<HandContainer deg={(360 / 24) * time?.hour}>
				<Hand width={3} height={30} color='#000000' />
			</HandContainer>
			<HandContainer deg={(360 / 60) * time?.minute}>
				<Hand width={2} height={35} color='#000000' />
			</HandContainer>
			<HandContainer deg={(360 / 60) * time?.second}>
				<Hand width={1} height={35} color='#ff0000' />
			</HandContainer>
		</Container>
	)
}

export default Single
