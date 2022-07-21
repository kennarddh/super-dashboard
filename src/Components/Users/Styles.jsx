import styled from 'styled-components'

export const ListContainer = styled.div`
	overflow-y: scroll;
	height: 100%;
	width: 90%;

	scroll-behavior: smooth;
`

export const ListItem = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid black;
`

export const AddButton = styled.button`
	background-color: #dbdbdb;
	color: white;

	border: none;
	padding: 5px 10px;

	border-radius: 15px;
`

export const Container = styled.div`
	width: 100%;
	height: 100%;
`

export const Header = styled.div`
	height: 10%;
	display: flex;
	justify-content: space-around;
	align-items: center;

	flex-direction: row;
`

export const ContentContainer = styled.div`
	width: 100%;
	height: 90%;

	display: flex;
	flex-direction: row;
`

export const AlphabetList = styled.div`
	width: 10%;
	height: 100%;

	display: flex;
	align-items: center;
	gap: 5px;
	flex-direction: column;

	overflow-y: scroll;
`

export const AlphabetItem = styled.a`
	text-decoration: none;
	text-transform: uppercase;
	user-select: none;
	cursor: pointer;
	color: #000000;
`

export const LetterTitle = styled.h4`
	margin: 10px 0;
`
