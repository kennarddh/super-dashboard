import styled, { css } from 'styled-components'

const BaseButton = styled.button`
	width: var(--size);
	height: var(--size);

	background-color: ${({ backgroundColor }) => backgroundColor ?? '#a0a0a0'};

	border: ${({ border }) => border ?? 'none'};
	color: ${({ color }) => color ?? '#ffffff'};

	padding: ${({ padding }) =>
		typeof padding === 'number' ? `${padding}px` : padding};

	margin: ${({ margin }) =>
		typeof margin === 'number' ? `${margin}px` : margin};

	${({ top, bottom, right, left }) =>
		(top || bottom || right || left) &&
		css`
			position: absolute;

			${top &&
			css`
				top: ${top}px;
			`}

			${bottom &&
			css`
				bottom: ${bottom}px;
			`}

					${right &&
			css`
				right: ${right}px;
			`}

					${left &&
			css`
				top: ${left}px;
			`}
		`}
`

export default BaseButton
