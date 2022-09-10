import styled from 'styled-components'

export const Button = styled.button`
	background-color: ${({ theme }) => theme.toggleButtonBackgroundColor};
	color: ${({ theme }) => theme.toggleButtonColor};
	border-radius: 10px;
	border: none;
	cursor: pointer;
	padding: 5px 10px;
`
