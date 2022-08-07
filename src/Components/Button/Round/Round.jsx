import styled from 'styled-components'

import BaseButton from 'Components/Button/Base/Base'

const RoundButton = styled(BaseButton)`
	--radius: ${({ radius }) => radius ?? 20}px;
	--height: calc(var(--radius) * 2);
	--width: var(--height);

	border-radius: var(--radius);
`

export default RoundButton
