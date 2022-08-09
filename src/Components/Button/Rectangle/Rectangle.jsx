import styled from 'styled-components'

import BaseButton from 'Components/Button/Base/Base'

const RectangleButton = styled(BaseButton)`
	--radius: ${({ radius }) =>
		typeof radius === 'number' ? `${radius}px` : radius};

	--height: ${({ height }) =>
		typeof height === 'number' ? `${height}px` : height};

	--width: ${({ width }) =>
		typeof width === 'number' ? `${width}px` : width};

	border-radius: var(--radius);
`

RectangleButton.defaultProps = {
	height: 10,
	width: 10,
}

export default RectangleButton
