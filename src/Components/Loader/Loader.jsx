import React from 'react'

import { Container, LoaderRing } from './Styles'

const Loader = ({ size, center }) => {
	return (
		<Container center={center}>
			<LoaderRing size={size} />
		</Container>
	)
}

export default Loader
