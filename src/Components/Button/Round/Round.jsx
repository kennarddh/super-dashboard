import styled from 'styled-components'

import BaseButton from 'Components/Button/Base/Base'

const RoundButton = styled(BaseButton)`
	--width: ${({ size }) => (typeof size === 'number' ? `${size}px` : size)};

	--height: var(--width);

	border-radius: 50%;
`

RoundButton.defaultProps = {
	size: 10,
}

export default RoundButton
