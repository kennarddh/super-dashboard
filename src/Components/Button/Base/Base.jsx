import styled, { css } from 'styled-components'

const BaseButton = styled.button`
	width: var(--width);
	height: var(--height);

	background-color: ${({ backgroundColor }) => backgroundColor};

	border: ${({ border }) => border};
	color: ${({ color }) => color};

	padding: ${({ padding }) =>
		typeof padding === 'number' ? `${padding}px` : padding};

	margin: ${({ margin }) =>
		typeof margin === 'number' ? `${margin}px` : margin};

	${({ as: asProps, centerContent }) =>
		asProps !== 'a' &&
		centerContent &&
		css`
			display: flex;
			justify-content: center;
			align-items: center;
		`}

	${({ as: asProps }) =>
		asProps === 'a'
			? css`
					text-decoration: none;

					display: flex;
					justify-content: center;
					align-items: center;
			  `
			: css`
					cursor: pointer;
			  `}

	${({ top, bottom, right, left }) =>
		(top || bottom || right || left) &&
		css`
			position: absolute;

			${top &&
			css`
				top: ${({ top }) =>
					typeof top === 'number' ? `${top}px` : top};
			`}

			${bottom &&
			css`
				bottom: ${({ bottom }) =>
					typeof bottom === 'number' ? `${bottom}px` : bottom};
			`}

			${right &&
			css`
				right: ${({ right }) =>
					typeof right === 'number' ? `${right}px` : right};
			`}

			${left &&
			css`
				left: ${({ left }) =>
					typeof left === 'number' ? `${left}px` : left};
			`}
		`}
`

BaseButton.defaultProps = {
	backgroundColor: '#a0a0a0',
	border: 'none',
	color: '#ffffff',
}

export default BaseButton
