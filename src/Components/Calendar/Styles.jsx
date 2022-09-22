import styled, { css } from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100%;

	background-color: ${({ theme }) => theme.widget.container};
	color: ${({ theme }) => theme.widget.color};

	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
`

export const Tiles = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 50px);
	grid-template-rows: repeat(7, 50px);
`

export const Tile = styled.p`
	width: 50px;
	height: 50px;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: #b8b8b8;

	--border: 1px solid #000000;

	border-right: var(--border);
	border-bottom: var(--border);

	&:nth-child(7n + 1) {
		border-left: var(--border);
	}

	&:nth-child(-n + 7) {
		border-top: var(--border);
	}

	user-select: none;
	cursor: pointer;

	${({ current }) =>
		current &&
		css`
			background-color: #d4d4d4;
		`}

	${({ red }) =>
		red &&
		css`
			color: #ff0000;
		`}

		${({ selected }) =>
		selected &&
		css`
			background-color: #0077ff;
		`}

	${({ lowerOpacity }) =>
		lowerOpacity &&
		css`
			opacity: 0.5;

			cursor: unset;
		`}
`

export const ChangeMonthButton = styled.p`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	font-size: 3rem;
	user-select: none;
`

export const Row = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
`

export const Form = styled.form`
	display: grid;
	grid-template-columns: 60px 200px;
	grid-template-rows: repeat(2, 25px);
	row-gap: 10px;
`

export const Input = styled.input`
	border: none;
	background-color: #dbdbdb;
	text-align: center;
	border-radius: 5px;
`
