import React from 'react'

import Input from 'Components/Input/Input'

import { OuterContainer, Container, Select, RowContainer } from './Styles'

const CurrencyConverter = () => {
	return (
		<OuterContainer>
			<Container>
				<RowContainer>
					<Select>
						<option value=''>Input</option>
					</Select>
					<Input height='100%' width='50%' />
				</RowContainer>
				<RowContainer>
					<Select>
						<option value=''>Output</option>
					</Select>
					<Input height='100%' disabled width='50%' />
				</RowContainer>
			</Container>
		</OuterContainer>
	)
}

export default CurrencyConverter
