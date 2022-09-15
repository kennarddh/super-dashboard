import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100%;

	background-color: ${({ theme }) => theme.widget.container};
	color: ${({ theme }) => theme.widget.color};
`

export const Tiles = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 50px);
`

export const Tile = styled.p`
	width: 50px;
	height: 50px;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: #b8b8b8;
	border: 1px solid #000000;
`
