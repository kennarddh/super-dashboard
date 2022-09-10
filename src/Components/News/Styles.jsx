import styled from 'styled-components'

export const Container = styled.div`
	overflow-y: scroll;
	height: 100%;
	display: flex;

	background-color: ${({ theme }) => theme.widget.container};
	color: ${({ theme }) => theme.widget.color};
`

export const ArticleContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
	padding: 20px 0;
`
