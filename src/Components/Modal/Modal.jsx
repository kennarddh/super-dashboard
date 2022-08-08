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
	width: ${({ width }) => {
		if (width) {
			return typeof padding === 'number' ? `${width}px` : width
		}

		return '80%'
	}};

	height: ${({ height }) => {
		if (height) {
			return typeof padding === 'number' ? `${height}px` : height
		}

		return '50%'
	}};

	background-color: ${({ backgroundColor }) => backgroundColor ?? '#ffffff'};

	border: ${({ border }) => border ?? 'none'};
	color: ${({ color }) => color ?? '#000000'};

	padding: ${({ padding }) => {
		if (padding) {
			return typeof padding === 'number' ? `${padding}px` : padding
		}

		return '15px'
	}};

	margin: ${({ margin }) =>
		typeof margin === 'number' ? `${margin}px` : margin};

	border-radius: ${({ radius }) => {
		if (radius) {
			return typeof radius === 'number' ? `${radius}px` : radius
		}

		return '15px'
	}};

	display: flex;
	justify-content: space-evenly;
	align-items: center;

	flex-direction: ${({ flexDirection }) => flexDirection ?? 'column'};
	gap: 20px;
`
