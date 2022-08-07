import styled, { css } from 'styled-components'

export const StyledRoundButton = styled.button`
	--radius: ${props => props.radius ?? 20}px;
	--size: calc(var(--radius) * 2);

	width: var(--size);
	height: var(--size);

	border-radius: var(--radius);
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
