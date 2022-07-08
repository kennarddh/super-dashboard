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
