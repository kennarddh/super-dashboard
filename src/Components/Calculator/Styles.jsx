import styled from 'styled-components'

export const OuterContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100%;
`

export const Container = styled.div`
	border-radius: 15px;

	background-color: #d9d9d9;

	padding: 10px;

	width: 98%;
	height: 90%;

	display: flex;
	flex-direction: column;

	gap: 20px;
`

export const Button = styled.button`
	width: 50px;
	height: 50px;
	border: none;

	font-size: 1.5rem;
	background-color: #ff9100;
	border-radius: 15px;
`

export const ButtonContainer = styled.div`
	display: grid;

	grid-template-columns: repeat(${props => props.col}, 50px);
	gap: 10px;
`

export const ButtonOuterContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
`

export const Display = styled.div`
	background-color: #4b4b4b;
	padding: 10px 20px;

	color: #ffffff;
	height: 75px;

	border-radius: 15px;
`

export const Empty = styled.div`
	width: 50px;
	height: 50px;
`

export const UnclosedParenthesesStyle = styled.span`
	opacity: 0.5;
`
