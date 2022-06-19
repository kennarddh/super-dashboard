import styled from 'styled-components'

export const Hand = styled.div`
	position: absolute;
	width: ${props => props.width}px;
	height: ${props => props.height}%;
	margin-top: calc(var(--size) / 100 * (50 - ${props => props.height}));
	background-color: ${props => props.color};
`

export const HandContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	${props => `transform: rotate(${props.deg}deg);`}
	top: 0;
	left: 0;
`

export const Container = styled.div`
	--size: ${props => props.size}px;

	background-color: #b6b6b6;
	width: var(--size);
	height: var(--size);
	border-radius: 50%;
	position: relative;
`
