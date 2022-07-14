import React, { useState } from 'react'

import Modal from 'Components/News/Article/Modal/Modal'

import { Container, Image, Body, Title, Description } from './Styles'

const Article = ({ article }) => {
	const [IsOpen, SetIsOpen] = useState(false)

	const Open = event => {
		event.stopPropagation()

		SetIsOpen(true)
	}

	const Close = () => {
		SetIsOpen(false)
	}

	return (
		<Container onClick={Open}>
			<Image src={article.urlToImage} alt='Article image' />
			<Body>
				<Title>{article.title}</Title>
				<Description>{article.description}</Description>
			</Body>
			<Modal article={article} isOpen={IsOpen} onClose={Close} />
		</Container>
	)
}

export default Article
