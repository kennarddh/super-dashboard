import React, { useMemo } from 'react'

import Input from 'Components/Input/Input'

import CurrencyCodeToCurrencyName from 'Constants/Country/CurrencyCodeToCurrencyName'
import SupportedCurrency from 'Constants/CurrencyConverter/SupportedCurrency'

import { OuterContainer, Container, Select, RowContainer } from './Styles'

const CurrencyConverter = () => {
	const Iso3ToCountryNameSupportedCountry = useMemo(() => {
		return Object.entries(CurrencyCodeToCurrencyName).reduce(
			(acc, [code, name]) => {
				if (SupportedCurrency.includes(code)) {
					acc.push([code, name])
				}

				return acc
			},
			[]
		)
	}, [])

	return (
		<OuterContainer>
			<Container>
				<RowContainer>
					<Select>
						<option value=''>Input</option>
						{Iso3ToCountryNameSupportedCountry.map(
							([iso3, name]) => (
								<option key={iso3} value={iso3}>
									{name}
								</option>
							)
						)}
					</Select>
					<Input height='100%' width='50%' />
				</RowContainer>
				<RowContainer>
					<Select>
						<option value=''>Output</option>
						{Iso3ToCountryNameSupportedCountry.map(
							([iso3, name]) => (
								<option key={iso3} value={iso3}>
									{name}
								</option>
							)
						)}
					</Select>
					<Input height='100%' disabled width='50%' />
				</RowContainer>
			</Container>
		</OuterContainer>
	)
}

export default CurrencyConverter
