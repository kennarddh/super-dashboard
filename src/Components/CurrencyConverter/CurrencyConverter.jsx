import React, { useMemo, useState } from 'react'

import InputComponent from 'Components/Input/Input'
import RectangleButton from 'Components/Button/Rectangle/Rectangle'

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

	const [InputCurrency, SetInputCurrency] = useState('')
	const [OutputCurrency, SetOutputCurrency] = useState('')
	const [Input, SetInput] = useState('')
	const [Output, SetOutput] = useState('')

	const OnChangeInputCurrency = event => {
		SetInputCurrency(event.target.value)
	}

	const OnChangeOutputCurrency = event => {
		SetOutputCurrency(event.target.value)
	}

	const OnChangeInput = event => {
		SetInput(event.target.value)
	}

	const Convert = () => {
		fetch(
			`https://api.exchangerate.host/convert?from=${InputCurrency}&to=${OutputCurrency}&amount=${Input}`
		)
			.then(response => response.json())
			.then(({ result }) => {
				SetOutput(result)
			})
			.catch(console.log)
	}

	return (
		<OuterContainer>
			<Container>
				<RowContainer>
					<Select
						value={InputCurrency}
						onChange={OnChangeInputCurrency}
					>
						<option value=''>Input</option>
						{Iso3ToCountryNameSupportedCountry.map(
							([iso3, name]) => (
								<option key={iso3} value={iso3}>
									{name}
								</option>
							)
						)}
					</Select>
					<InputComponent
						value={Input}
						onChange={OnChangeInput}
						height='100%'
						width='55%'
					/>
				</RowContainer>
				<RowContainer>
					<Select
						value={OutputCurrency}
						onChange={OnChangeOutputCurrency}
					>
						<option value=''>Output</option>
						{Iso3ToCountryNameSupportedCountry.map(
							([iso3, name]) => (
								<option key={iso3} value={iso3}>
									{name}
								</option>
							)
						)}
					</Select>
					<InputComponent
						value={Output}
						height='100%'
						disabled
						width='55%'
					/>
				</RowContainer>
				<RectangleButton
					width={100}
					height={50}
					radius={10}
					padding='10px 20px'
					onClick={Convert}
				>
					Convert
				</RectangleButton>
			</Container>
		</OuterContainer>
	)
}

export default CurrencyConverter
