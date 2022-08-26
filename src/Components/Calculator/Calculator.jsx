import React, { useState, useMemo } from 'react'

import ParseMathExpression from 'Utils/ParseMathExpression/ParseMathExpression'

import {
	OuterContainer,
	Container,
	Display,
	Button,
	ButtonContainer,
	ButtonOuterContainer,
	// Empty,
} from './Styles'

const Calculator = () => {
	const [Expression, SetExpression] = useState('')
	const [CurrentNumber, SetCurrentNumber] = useState('0')

	const NewNumber = value => {
		SetCurrentNumber(prev => {
			if (prev === 'Infinity') return value.toString()
			if (prev === '0') return value.toString()
			if (prev === 'pi') return prev

			return prev + value
		})
	}

	const InversePlusMinus = () => {
		SetCurrentNumber(prev => (parseFloat(prev, 10) * -1).toString())
	}

	const NewOperator = value => {
		if (CurrentNumber === 'Infinity') return

		const currentNumber =
			CurrentNumber.slice(-1) === '.'
				? CurrentNumber.slice(0, CurrentNumber.length - 1)
				: CurrentNumber

		const isMinus = currentNumber.slice(0, 1) === '-'

		SetExpression(
			prev =>
				`${prev} ${
					isMinus ? `(${currentNumber})` : currentNumber
				} ${value}`
		)

		SetCurrentNumber('0')
	}

	const Equal = () => {
		const currentNumber =
			CurrentNumber.slice(-1) === '.'
				? CurrentNumber.slice(0, CurrentNumber.length - 1)
				: CurrentNumber

		const isMinus = currentNumber.slice(0, 1) === '-'

		const expression = `${Expression} ${
			isMinus ? `(${currentNumber})` : currentNumber
		}`

		const result = ParseMathExpression(expression)

		SetExpression('')
		SetCurrentNumber(result.toString())
	}

	const Dot = () => {
		if (CurrentNumber.includes('.')) return

		SetCurrentNumber(prev => `${prev}.`)
	}

	const Clear = () => {
		SetExpression('')
		SetCurrentNumber('0')
	}

	const Preview = useMemo(() => {
		const currentNumber =
			CurrentNumber.slice(-1) === '.'
				? CurrentNumber.slice(0, CurrentNumber.length - 1)
				: CurrentNumber

		const isMinus = currentNumber.slice(0, 1) === '-'

		return `${Expression} ${isMinus ? `(${currentNumber})` : currentNumber}`
	}, [CurrentNumber, Expression])

	return (
		<OuterContainer>
			<Container>
				<Display>
					<p>{Preview}</p>
					<p>{CurrentNumber}</p>
				</Display>
				<ButtonOuterContainer>
					<ButtonContainer col={3}>
						<Button onClick={() => NewNumber(7)}>7</Button>
						<Button onClick={() => NewNumber(8)}>8</Button>
						<Button onClick={() => NewNumber(9)}>9</Button>
						<Button onClick={() => NewNumber(4)}>4</Button>
						<Button onClick={() => NewNumber(5)}>5</Button>
						<Button onClick={() => NewNumber(6)}>6</Button>
						<Button onClick={() => NewNumber(1)}>1</Button>
						<Button onClick={() => NewNumber(2)}>2</Button>
						<Button onClick={() => NewNumber(3)}>3</Button>
						<Button onClick={() => NewNumber(0)}>0</Button>
						<Button onClick={() => Dot('.')}>.</Button>
						<Button onClick={() => Equal()}>=</Button>
					</ButtonContainer>
					<ButtonContainer col={1}>
						<Button onClick={() => NewOperator('+')}>+</Button>
						<Button onClick={() => NewOperator('-')}>-</Button>
						<Button onClick={() => NewOperator('/')}>/</Button>
						<Button onClick={() => NewOperator('*')}>*</Button>
					</ButtonContainer>
					<ButtonContainer col={1}>
						<Button onClick={() => Clear()}>AC</Button>
						<Button onClick={() => NewOperator('^')}>^</Button>
						<Button onClick={() => InversePlusMinus('plusminus')}>
							±
						</Button>
						<Button onClick={() => NewNumber('pi')}>π</Button>
					</ButtonContainer>
				</ButtonOuterContainer>
			</Container>
		</OuterContainer>
	)
}

export default Calculator
