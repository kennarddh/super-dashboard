import styled from 'styled-components'

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
