import React, { useRef } from 'react'

import ReactPortal from 'Components/ReactPortal/ReactPortal'

import RectangleButton from 'Components/Button/Rectangle/Rectangle'

import useClickOutside from 'Hooks/useClickOutside'

import {
	Container,
	ModalContainer,
	Title,
	Content,
	Buttons,
	Image,
	Body,
	Footer,
	PublishedAt,
} from './Styles'

const Modal = ({ article, isOpen, onClose }) => {
	const ModalContainerRef = useRef()

	useClickOutside(ModalContainerRef, onClose)

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
								<RectangleButton
									backgroundColor='#ff0000'
									width={150}
									height={50}
									radius={10}
									padding='10px 20px'
									onClick={Close}
								>
									Close
								</RectangleButton>
								<RectangleButton
									as='a'
									target='_blank'
									href={article.url}
									backgroundColor='#0000ff'
									width={150}
									height={50}
									radius={10}
									padding='10px 20px'
								>
									Read More
								</RectangleButton>
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
