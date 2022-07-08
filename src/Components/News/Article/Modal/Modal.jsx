import React, { useRef } from 'react'

import ReactPortal from 'Components/ReactPortal/ReactPortal'

import useClickOutside from 'Hooks/useClickOutside'

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
	Footer,
	PublishedAt,
} from './Styles'

const Modal = ({ article, isOpen, onClose }) => {
	const ModalContainerRef = useRef()

	useClickOutside(ModalContainerRef, () => {
		onClose()
	})

	const Close = event => {
		event.stopPropagation()

		onClose()
	}

	return (
		<ReactPortal wrapperId={article.url}>
			{isOpen && (
				<Container>
					<ModalContainer ref={ModalContainerRef}>
						<Body>
							<Image
								src={article.urlToImage}
								alt='Article Image'
							/>
							<Title>{article.title}</Title>
							<Content>{article.content}</Content>
						</Body>
						<Footer>
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
							<PublishedAt>
								Published At:{' '}
								{article.publishedAt.split('T').join(' ')}
							</PublishedAt>
						</Footer>
					</ModalContainer>
				</Container>
			)}
		</ReactPortal>
	)
}

export default Modal
