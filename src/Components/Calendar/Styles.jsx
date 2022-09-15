import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100%;

	background-color: ${({ theme }) => theme.widget.container};
	color: ${({ theme }) => theme.widget.color};

	display: flex;
	justify-content: space-around;
	align-items: center;
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

export const ChangeMonthButton = styled.p`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	font-size: 3rem;
`
