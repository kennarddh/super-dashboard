import styled from 'styled-components'

export const Title = styled.h3`
	margin: 0;
`

export const Content = styled.p`
	margin: 0;
`

export const PublishedAt = styled.p`
	margin: 0;
	padding: 10px;
`

export const Buttons = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;
`

export const Footer = styled.div`
	height: 10%;
	width: 100%;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

export const Body = styled.div`
	height: 90%;
	width: 100%;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 10px;
	}

	&::-webkit-scrollbar-track {
		background: #f1f1f1;
		border-radius: 5px;
	}

	&::-webkit-scrollbar-thumb {
		background: #888888;
		border-radius: 5px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: #777777;
	}
`

export const Image = styled.img`
	width: 100%;
`
