import React from 'react'

import ReactPortal from 'Components/ReactPortal/ReactPortal'

import {
	Container,
	ModalContainer,
	Title,
	Content,
	CloseButton,
} from './Styles'

const Modal = ({ article, isOpen }) => {
	const Close = () => {
		console.log('close')
	}

	return (
		<ReactPortal wrapperId={article.url}>
			{isOpen && (
				<Container>
					<ModalContainer>
						<Title>{article.title}</Title>
						<Content>{article.content}</Content>
						<CloseButton onClick={Close}>Close</CloseButton>
					</ModalContainer>
				</Container>
			)}
		</ReactPortal>
	)
}

export default Modal
