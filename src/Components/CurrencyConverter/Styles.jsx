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

	width: 70%;
	height: 80%;

	display: flex;
	flex-direction: column;

	gap: 20px;
`

export const RowContainer = styled.div`
	display: flex;

	flex-direction: row;

	justify-content: space-between;
`

export const Select = styled.select`
	padding: 10px;
	background-color: #c5c5c5;

	border-radius: 10px;
	border: none;
	width: 40%;
`
