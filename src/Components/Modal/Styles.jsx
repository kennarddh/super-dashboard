import styled from 'styled-components'

export const ModalContainer = styled.div`
	background-color: ${({ backgroundColor }) => backgroundColor};

	position: absolute;
	top: ${() => window.scrollY}px;
	left: 0;
	right: 0;
	bottom: ${() => window.scrollY * -1}px;

	display: flex;
	justify-content: center;
	align-items: center;
`

ModalContainer.defaultProps = {
	backgroundColor: '#b4b4b4a4',
}

export const ModalContent = styled.div`
	width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};

	height: ${({ height }) =>
		typeof height === 'number' ? `${height}px` : height};

	background-color: ${({ backgroundColor, overideTheme, theme }) =>
		overideTheme ? backgroundColor : theme.modal.backgroundColor};

	color: ${({ color }) => color};
	border: ${({ border }) => border};

	padding: ${({ padding }) =>
		typeof padding === 'number' ? `${padding}px` : padding};

	margin: ${({ margin }) =>
		typeof margin === 'number' ? `${margin}px` : margin};

	border-radius: ${({ radius }) =>
		typeof radius === 'number' ? `${radius}px` : radius};

	display: flex;
	justify-content: space-evenly;
	align-items: center;

	flex-direction: ${({ flexDirection }) => flexDirection};
	gap: 20px;
`

ModalContent.defaultProps = {
	width: '80%',
	height: '50%',
	backgroundColor: '#ffffff',
	border: 'none',
	color: '#000000',
	padding: 15,
	margin: 15,
	radius: 15,
	flexDirection: 'column',
	overideTheme: false,
}
