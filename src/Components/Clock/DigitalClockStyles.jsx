import styled from 'styled-components'

export const TimeContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 150px;
	height: height: 50px;
	padding: 0.5rem;
	background-color: #fff;
	border-radius: 0.5rem;
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
	margin-bottom: 0.5rem;
	box-sizing: border-box;
`

export const TimeText = styled.p`
	font-size: 1.5rem;
	font-weight: bold;
	margin: 0;
	padding: 0;
	color: #000;

	&:not(:last-child)::after {
		content: ':';
		margin: 0 0.5rem;
	}
`

export const TimeContainerParent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding: 20px;
	gap: 20px;
`
