import React, { useRef, forwardRef, useCallback } from 'react'

import RectangleButton from 'Components/Button/Rectangle/Rectangle'

import ModalComponent from 'Components/Modal/Modal'

import {
	Title,
	Content,
	Buttons,
	Image,
	Body,
	Footer,
	PublishedAt,
} from './Styles'

const Modal = ({ article }, ref) => {
	const ModalComponentRef = useRef()

	const Close = useCallback(event => {
		event.stopPropagation()

		ModalComponentRef.current?.Close()
	}, [])

	return (
		<ModalComponent
			wrapperId={article.url}
			ref={modalRef => {
				ModalComponentRef.current = modalRef

				ref.current = {
					Open: modalRef?.Open,
				}
			}}
			contentProps={{
				width: '50%',
				height: '80%',
			}}
		>
			<Body>
				<Image src={article.urlToImage} alt='Article Image' />
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
						fontSize={17}
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
						fontSize={17}
					>
						Read More
					</RectangleButton>
				</Buttons>
				<PublishedAt>
					Published At: {article.publishedAt.split('T').join(' ')}
				</PublishedAt>
			</Footer>
		</ModalComponent>
	)
}

export default forwardRef(Modal)
