import React, { useRef } from 'react'

import Modal from 'Components/News/Article/Modal/Modal'

import { Container, Image, Body, Title, Description } from './Styles'

const Article = ({ article }) => {
	const ModalRef = useRef()

	return (
		<Container
			onClick={() => {
				ModalRef.current?.Open()
			}}
		>
			<Image src={article.urlToImage} alt='Article image' />
			<Body>
				<Title>{article.title}</Title>
				<Description>{article.description}</Description>
			</Body>
			<Modal article={article} ref={ModalRef} />
		</Container>
	)
}

export default Article
