import React, { useContext, useRef, useState } from 'react'

import { ImagesContext } from 'Contexts/Images'

import Modal from 'Components/Modal/Modal'

import RectangleButton from 'Components/Button/Rectangle/Rectangle'

import { Container, Image, ImageContainer } from './Styles'

const Images = () => {
	const [SelectedImageId, SetSelectedImageId] = useState()

	const { Images: ImagesData, RemoveImage } = useContext(ImagesContext)

	const RemoveImageModalRef = useRef()

	const SelectImage = (event, id) => {
		event.preventDefault()
		event.stopPropagation()

		SetSelectedImageId(id)

		RemoveImageModalRef.current?.Open()
	}

	return (
		<Container>
			{ImagesData.map(({ id, data }) => (
				<ImageContainer
					key={id}
					onClick={event => SelectImage(event, id)}
				>
					<Image src={data} alt='Saved image' />
				</ImageContainer>
			))}
			<Modal
				ref={RemoveImageModalRef}
				wrapperId='remove-image'
				contentProps={{
					width: '50%',
					height: '20%',
					flexDirection: 'row',
					as: 'form',
					onSubmit: event => {
						event.preventDefault()

						RemoveImage(SelectedImageId)
						RemoveImageModalRef.current?.Close()
					},
				}}
			>
				<h3>Remove Image</h3>
				<RectangleButton
					width='10%'
					height='40%'
					radius={15}
					type='submit'
				>
					Remove
				</RectangleButton>
				<RectangleButton
					backgroundColor='#ff0000'
					width='10%'
					height='40%'
					radius={15}
					type='button'
					onClick={() => {
						RemoveImageModalRef.current?.Close()
					}}
				>
					Close
				</RectangleButton>
			</Modal>
		</Container>
	)
}

export default Images
