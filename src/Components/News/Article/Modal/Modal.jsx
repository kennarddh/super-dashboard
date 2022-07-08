import React from 'react'

import ReactPortal from 'Components/ReactPortal/ReactPortal'

import {
	Container,
	ModalContainer,
	Title,
	Content,
	CloseButton,
	ReadMoreButton,
	Buttons,
	Image,
	Body,
} from './Styles'

const Modal = ({ article, isOpen, onClose }) => {
	const Close = event => {
		event.stopPropagation()

		onClose()
	}

	return (
		<ReactPortal wrapperId={article.url}>
			{isOpen && (
				<Container>
					<ModalContainer>
						<Body>
							<Image
								src={article.urlToImage}
								alt='Article Image'
							/>
							<Title>{article.title}</Title>
							<Content>{article.content}</Content>
						</Body>
						<Buttons>
							<CloseButton onClick={Close}>Close</CloseButton>
							<ReadMoreButton
								as='a'
								target='_blank'
								href={article.url}
							>
								Read More
							</ReadMoreButton>
						</Buttons>
					</ModalContainer>
				</Container>
			)}
		</ReactPortal>
	)
}

export default Modal
