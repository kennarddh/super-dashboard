import styled from 'styled-components'

import BaseButton from 'Components/Button/Base/Base'

const RectangleButton = styled(BaseButton)`
	--radius: ${({ radius }) =>
		typeof radius === 'number' ? `${radius ?? 0}px` : radius};

	--height: ${({ height }) =>
		typeof height === 'number' ? `${height ?? 10}px` : height};

	--width: ${({ width }) =>
		typeof width === 'number' ? `${width ?? 10}px` : width};

	border-radius: var(--radius);
`

export default RectangleButton
