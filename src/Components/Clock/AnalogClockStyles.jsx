import styled from 'styled-components'

export const Hand = styled.div`
	position: absolute;
	width: ${props => props.width}px;
	height: 40%;
	margin-top: calc(var(--size) / 100 * 10);
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
	transition: transform 0.1s linear;
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

export const ClockContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding: 20px;
	gap: 20px;
	flex-wrap: wrap;
	box-sizing: border-box;
`
