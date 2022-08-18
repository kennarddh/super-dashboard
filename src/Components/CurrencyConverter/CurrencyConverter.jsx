import React, { useMemo, useState } from 'react'

import InputComponent from 'Components/Input/Input'

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

	const [Input, SetInput] = useState('')
	const [Output, SetOutput] = useState('')

	const OnChangeInput = event => {
		SetInput(event.target.value)
	}

	const OnChangeOutput = event => {
		SetOutput(event.target.value)
	}

	return (
		<OuterContainer>
			<Container>
				<RowContainer>
					<Select value={Input} onChange={OnChangeInput}>
						<option value=''>Input</option>
						{Iso3ToCountryNameSupportedCountry.map(
							([iso3, name]) => (
								<option key={iso3} value={iso3}>
									{name}
								</option>
							)
						)}
					</Select>
					<InputComponent height='100%' width='50%' />
				</RowContainer>
				<RowContainer>
					<Select value={Output} onChange={OnChangeOutput}>
						<option value=''>Output</option>
						{Iso3ToCountryNameSupportedCountry.map(
							([iso3, name]) => (
								<option key={iso3} value={iso3}>
									{name}
								</option>
							)
						)}
					</Select>
					<InputComponent height='100%' disabled width='50%' />
				</RowContainer>
			</Container>
		</OuterContainer>
	)
}

export default CurrencyConverter
