import styled from 'styled-components'

export const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;

	background-color: ${({ theme }) => theme.widget.container};
	color: ${({ theme }) => theme.widget.color};
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
