import styled from 'styled-components'

import BaseButton from 'Components/Button/Base/Base'

const RectangleButton = styled(BaseButton)`
	--radius: ${({ radius }) => radius ?? 0}px;
	--height: ${({ height }) => height}px;
	--width: ${({ width }) => width}px;

	border-radius: var(--radius);
`

export default RectangleButton
