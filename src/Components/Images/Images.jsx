import React, { useContext } from 'react'

import { ImagesContext } from 'Contexts/Images'

import { Container, Image } from './Styles'

const Images = () => {
	const { Images: ImagesData } = useContext(ImagesContext)

	return (
		<Container>
			{ImagesData.map(({ id, data }) => (
				<Image key={id} src={data} alt='Saved image' />
			))}
		</Container>
	)
}

export default Images
