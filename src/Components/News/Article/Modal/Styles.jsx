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

export const CloseButton = styled.button`
	margin: 0;
	padding: 10px 20px;

	position: absolute;
	bottom: 30px;
	left: 30px;

	border: none;
	border-radius: 10px;
	background-color: #8f8f8f;
	color: #ffffff;
`
