import styled from 'styled-components'

import BaseButton from 'Components/Button/Base/Base'

const RoundButton = styled(BaseButton)`
	--width: ${({ size }) =>
		typeof size === 'number' ? `${size ?? 10}px` : size};

	--height: var(--width);

	border-radius: 50%;
`

export default RoundButton
