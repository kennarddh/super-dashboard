import styled from 'styled-components'

export const Modal = styled.div`
	background-color: ${({ backgroundColor }) =>
		backgroundColor ?? '#b4b4b4a4'};

	position: absolute;
	inset: 0;

	display: flex;
	justify-content: center;
	align-items: center;
`

export const ModalContent = styled.div`
	width: var(--width);
	height: var(--height);

	background-color: ${({ backgroundColor }) => backgroundColor ?? '#ffffff'};

	border: ${({ border }) => border ?? 'none'};
	color: ${({ color }) => color ?? '#ffffff'};

	padding: ${({ padding }) =>
		typeof padding === 'number' ? `${padding}px` : padding};

	margin: ${({ margin }) =>
		typeof margin === 'number' ? `${margin}px` : margin};

	border-radius: ${({ radius }) =>
		typeof radius === 'number' ? `${radius}px` : radius};

	display: flex;
	justify-content: space-evenly;
	align-items: center;

	flex-direction: column;
	gap: 20px;
`
