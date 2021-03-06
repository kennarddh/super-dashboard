import styled from 'styled-components'

export const ImagePreview = styled.img`
	width: 100px;
	height: 100px;

	aspect-ratio: 1/1;

	border-radius: 50%;
`

export const Buttons = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 20px;
	flex-direction: row;
`

export const SubmitButton = styled.button`
	width: 50%;
	height: 70%;
	border-radius: 15px;
	padding: 10px 20px;

	display: flex;
	justify-content: center;
	align-items: center;

	text-decoration: none;

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

export const ModalContainer = styled.div`
	position: absolute;
	inset: 0;
	background-color: #b4b4b4a4;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const ModalContentContainer = styled.form`
	height: 80%;
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
