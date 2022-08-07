import styled, { css } from 'styled-components'

const BaseButton = styled.button`
	width: var(--size);
	height: var(--size);

	background-color: ${props => props.backgroundColor ?? '#a0a0a0'};

	border: none;
	color: ${props => props.color ?? '#ffffff'};

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
