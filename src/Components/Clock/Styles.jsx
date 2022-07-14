import styled from 'styled-components'

export const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`

export const AddButton = styled.button`
	position: absolute;
	bottom: 20px;
	right: 20px;

	border-radius: 50%;

	width: 50px;
	height: 50px;

	background-color: #a0a0a0;
	border: none;
	color: white;
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
	height: 20%;
	width: 50%;
	background-color: #ffffff;
	border-radius: 15px;
	padding: 20px;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`

export const TimezoneInput = styled.input`
	width: 70%;
	height: 40%;
	border-radius: 15px;
	padding: 10px 20px;

	border: none;

	background-color: #b6b6b6;

	&::placeholder {
		color: white;
	}

	&:focus {
		outline: 1px solid black;
	}
`

export const SubmitButton = styled.button`
	width: 10%;
	height: 40%;
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
