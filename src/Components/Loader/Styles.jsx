import styled, { css } from 'styled-components'

export const Container = styled.div`
	${props =>
		props.center &&
		css`
			width: 100%;
			display: flex;
			justify-content: center;
			margin-top: 10px;
		`}
`

export const LoaderRing = styled.div`
	border: 10px solid #f3f3f3;
	border-top: 10px solid #3498db;
	border-radius: 50%;
	width: ${props => props.size}px;
	height: ${props => props.size}px;
	animation: spin 1s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`
