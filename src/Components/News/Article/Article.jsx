import React from 'react'

import { Container, Image, Body, Title, Description } from './Styles'

const Article = ({ article }) => {
	return (
		<Container>
			<Image src={article.urlToImage} alt='Article image' />
			<Body>
				<Title>{article.title}</Title>
				<Description>{article.description}</Description>
			</Body>
		</Container>
	)
}

export default Article
