import styled from 'styled-components'

export const ArticleContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`

export const Container = styled.div`
	overflow-y: scroll;
	height: 100%;
`

export const Article = styled.article`
	border: 1px solid black;
	padding: 20px;
	width: 90%;
	border-radius: 15px;
	display: flex;
	align-items: center;
	gap: 20px;
`

export const ArticleImage = styled.img`
	width: 300px;
`

export const ArticleBody = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`

export const ArticleTitle = styled.h3`
	margin: 0;
`

export const ArticleDescription = styled.p`
	margin: 0;
`
