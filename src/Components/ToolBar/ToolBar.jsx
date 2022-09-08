import styled, { css } from 'styled-components'

export const Toolbar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
	box-sizing: border-box;
	padding: 0.5rem;
	background-color: ${({ theme }) => theme.toolBar.backgroundColor};
	box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
		0 8px 16px -8px rgba(0, 0, 0, 0.3);

	height: 10%;
`

export const ToolbarInput = styled.input`
	border: none;
	background-color: ${({ theme }) => theme.toolBar.backgroundColor};
	color: ${({ theme }) => theme.toolBar.color};

	${({ width }) =>
		width
			? css`
					width: ${width};
			  `
			: ''}
`

export const ToolbarButton = styled.button`
	border: none;
	background-color: #fafafa;
	box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
		0 8px 16px -8px rgba(0, 0, 0, 0.3);
`
