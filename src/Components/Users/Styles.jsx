import styled from 'styled-components'

export const ListContainer = styled.div`
	overflow-y: scroll;
	height: 100%;
	width: 90%;
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

export const ModalContainer = styled.div`
	position: absolute;
	inset: 0;
	background-color: #b4b4b4a4;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const ModalContentContainer = styled.form`
	height: 60%;
	width: 50%;
	background-color: #ffffff;
	border-radius: 15px;
	padding: 20px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: 20px;
	justify-content: space-evenly;
	align-items: center;
`

export const SubmitButton = styled.button`
	width: 50%;
	height: 70%;
	border-radius: 15px;
	padding: 10px 20px;

	display: flex;
	justify-content: center;
	align-items: center;

	border: none;

	background-color: #b6b6b6;
	color: white;

	&:focus {
		outline: 1px solid black;
	}
`

export const CloseButton = styled(SubmitButton)`
	background-color: #ff0000;
`

export const Input = styled.input`
	width: 70%;
	height: 40%;
	border-radius: 15px;
	padding: 10px 20px;

	border: none;

	background-color: #b6b6b6;

	resize: none;

	&::placeholder {
		color: white;
	}

	&:focus {
		outline: 1px solid black;
	}
`

export const Buttons = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 20px;
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
