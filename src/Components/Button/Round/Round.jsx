import styled from 'styled-components'

import BaseButton from 'Components/Button/Base/Base'

const RoundButton = styled(BaseButton)`
	--radius: ${({ radius }) =>
		typeof radius === 'number' ? `${radius ?? 20}px` : radius};

	--height: calc(var(--radius) * 2);
	--width: var(--height);

	border-radius: var(--radius);
`

export default RoundButton
