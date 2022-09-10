import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: row;
	gap: 20px;

	overflow-x: scroll;

	height: 100%;

	padding: 10px 20px;

	&::-webkit-scrollbar {
		height: 10px;
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

	background-color: ${({ theme }) => theme.widget.container};
`

export const ImageContainer = styled.div`
	height: 80%;

	cursor: pointer;
	border: 1px #000000 solid;
	background-color: ${({ theme }) => theme.widget.images.backgroundColor};
`

export const Image = styled.img`
	height: 100%;
`
