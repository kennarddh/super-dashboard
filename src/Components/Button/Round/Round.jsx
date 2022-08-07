import styled from 'styled-components'

import BaseButton from 'Components/Button/Base/Base'

const RoundButton = styled(BaseButton)`
	--radius: ${props => props.radius ?? 20}px;
	--size: calc(var(--radius) * 2);

	border-radius: var(--radius);
`

export default RoundButton
