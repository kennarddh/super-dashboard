import styled from 'styled-components'

export const Container = styled.div`
	position: absolute;
	inset: 0;
	background-color: #b4b4b4a4;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const ModalContainer = styled.div`
	height: 80%;
	width: 50%;
	background-color: #ffffff;
	border-radius: 15px;

	padding: 20px;
	box-sizing: border-box;

	position: relative;
`

export const Title = styled.h3`
	margin: 0;
`

export const Content = styled.p`
	margin: 0;
`

export const Buttons = styled.div`
	position: absolute;
	bottom: 30px;
	left: 30px;

	display: flex;
	flex-direction: row;
	gap: 20px;
`

export const Button = styled.button`
	margin: 0;
	padding: 10px 20px;

	border: none;
	border-radius: 10px;
	background-color: #8f8f8f;
	color: #ffffff;
	box-sizing: border-box;

	text-decoration: none;

	width: 150px;
	height: 50px;
	font-size: 1rem;

	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;
`

export const CloseButton = styled(Button)`
	background-color: #ff0000;
`

export const ReadMoreButton = styled(Button)`
	background-color: #0000ff;
`
