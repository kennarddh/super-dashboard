import React, { useState, useMemo } from 'react'

import ParseMathExpression from 'Utils/ParseMathExpression/ParseMathExpression'
import PreviewMathSymbols from 'Utils/ParseMathExpression/PreviewMathSymbols'

import {
	OuterContainer,
	Container,
	Display,
	Button,
	ButtonContainer,
	ButtonOuterContainer,
	UnclosedParenthesesStyle,
	Empty,
} from './Styles'

const Calculator = () => {
	const [Expression, SetExpression] = useState('')
	const [CurrentNumber, SetCurrentNumber] = useState('0')
	const [UnclosedParentheses, SetUnclosedParentheses] = useState(0)

	const NewNumber = value => {
		SetCurrentNumber(prev => {
			if (prev.startsWith('0') && prev.endsWith('!!'))
				return `${prev.slice(1, -2)}${value.toString()}!!`
			if (prev.endsWith('!!'))
				return `${prev.slice(0, -2)}${value.toString()}!!`

			if (prev.startsWith('0') && prev.endsWith('!'))
				return `${prev.slice(1, -1)}${value.toString()}!`
			if (prev.endsWith('!'))
				return `${prev.slice(0, -1)}${value.toString()}!`

			if (prev === '0') return value.toString()
			if (prev === '') return prev
			if (prev === 'Infinity') return value.toString()
			if (prev === 'Error') return value.toString()

			if (prev === '0' && prev.startsWith('square_root_0'))
				return `square_root_${value}`

			if (prev === '0' && prev.startsWith('cube_root_0'))
				return `cube_root_${value}`

			if (prev === 'pi') return prev
			if (value === 'pi' && prev !== '') return prev
			if (prev === 'e') return prev
			if (value === 'e' && prev !== '') return prev
			if (prev.startsWith('square_root_') && value === 'pi') return prev
			if (prev.startsWith('cube_root_') && value === 'pi') return prev
			if (prev.startsWith('square_root_') && value === 'e') return prev
			if (prev.startsWith('cube_root_') && value === 'e') return prev
			if (prev.startsWith('cube_root_0')) return `cube_root_${value}`
			if (prev.startsWith('square_root_0')) return `square_root_${value}`

			return prev + value
		})
	}

	const InversePlusMinus = () => {
		SetCurrentNumber(prev => {
			if (
				prev === 'e' ||
				prev === 'pi' ||
				prev === 'Infinity' ||
				prev === 'Error' ||
				CurrentNumber.startsWith('square_root_') ||
				CurrentNumber.startsWith('cube_root_')
			)
				return prev

			return (parseFloat(prev, 10) * -1).toString()
		})
	}

	const NewOperator = value => {
		if (CurrentNumber === 'Infinity') return
		if (CurrentNumber === 'Error') return

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
		if (CurrentNumber === 'Infinity') return
		if (CurrentNumber === 'Error') return
		if (UnclosedParentheses > 0) return

		const currentNumber =
			CurrentNumber.slice(-1) === '.'
				? CurrentNumber.slice(0, CurrentNumber.length - 1)
				: CurrentNumber

		const isMinus = currentNumber.slice(0, 1) === '-'

		const expression = `${Expression} ${
			isMinus ? `(${currentNumber})` : currentNumber
		}`

		try {
			const result = ParseMathExpression(expression)

			SetExpression('')
			SetCurrentNumber(result.toString())
		} catch (error) {
			if (error instanceof RangeError) {
				SetExpression('')
				SetCurrentNumber('Error')
			}
		}
	}

	const Dot = () => {
		if (CurrentNumber.includes('.')) return

		SetCurrentNumber(prev => `${prev}.`)
	}

	const Clear = () => {
		SetExpression('')
		SetCurrentNumber('0')
		SetUnclosedParentheses(0)
	}

	const OpenParenthesis = () => {
		if (CurrentNumber === 'Infinity') return
		if (CurrentNumber === 'Error') return

		SetExpression(prev => {
			return `${prev} (`
		})

		SetUnclosedParentheses(prev => prev + 1)
	}

	const CloseParenthesis = () => {
		if (UnclosedParentheses <= 0) return

		const currentNumber =
			CurrentNumber.slice(-1) === '.'
				? CurrentNumber.slice(0, CurrentNumber.length - 1)
				: CurrentNumber

		const isMinus = currentNumber.slice(0, 1) === '-'

		SetExpression(
			prev =>
				`${prev} ${isMinus ? `(${currentNumber})` : currentNumber} )`
		)

		SetCurrentNumber('')

		SetUnclosedParentheses(prev => prev - 1)
	}

	const Factorial = () => {
		if (CurrentNumber.endsWith('!!')) return
		if (CurrentNumber === '') return
		if (CurrentNumber === 'Infinity') return
		if (CurrentNumber === 'Error') return
		if (CurrentNumber === 'pi') return
		if (CurrentNumber === 'e') return
		if (CurrentNumber.startsWith('square_root_')) return
		if (CurrentNumber.startsWith('cube_root_')) return

		SetCurrentNumber(prev => `${prev}!`)
	}

	const SquareRoot = () => {
		if (CurrentNumber.endsWith('!')) return
		if (CurrentNumber === '') return
		if (CurrentNumber === 'Infinity') return
		if (CurrentNumber === 'Error') return
		if (CurrentNumber.startsWith('square_root_')) return
		if (CurrentNumber.startsWith('cube_root_')) return
		if (CurrentNumber === 'e') return
		if (CurrentNumber === 'pi') return

		SetCurrentNumber(prev => `square_root_${prev}`)
	}

	const CubeRoot = () => {
		if (CurrentNumber.endsWith('!')) return
		if (CurrentNumber === '') return
		if (CurrentNumber === 'Infinity') return
		if (CurrentNumber === 'Error') return
		if (CurrentNumber.startsWith('square_root_')) return
		if (CurrentNumber.startsWith('cube_root_')) return
		if (CurrentNumber === 'e') return
		if (CurrentNumber === 'pi') return

		SetCurrentNumber(prev => `cube_root_${prev}`)
	}

	const Preview = useMemo(() => {
		const currentNumber =
			CurrentNumber.slice(-1) === '.'
				? CurrentNumber.slice(0, CurrentNumber.length - 1)
				: CurrentNumber

		const isMinus = currentNumber.slice(0, 1) === '-'

		const result = PreviewMathSymbols(
			`${Expression} ${isMinus ? `(${currentNumber})` : currentNumber}`
		)

		return result.replace(/square_root_/g, '√').replace(/cube_root_/g, '∛')
	}, [CurrentNumber, Expression])

	const CurrentNumberPreview = useMemo(() => {
		const currentNumber =
			CurrentNumber.slice(-1) === '.'
				? CurrentNumber.slice(0, CurrentNumber.length - 1)
				: CurrentNumber

		const result = PreviewMathSymbols(currentNumber)

		return result.replace(/square_root_/g, '√').replace(/cube_root_/g, '∛')
	}, [CurrentNumber])

	return (
		<OuterContainer>
			<Container>
				<Display>
					<p>
						{Preview}{' '}
						<UnclosedParenthesesStyle>
							{UnclosedParentheses
								? Array(UnclosedParentheses).fill(')').join('')
								: ''}
						</UnclosedParenthesesStyle>
					</p>
					<p>{CurrentNumberPreview}</p>
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
					<ButtonContainer col={1}>
						<Button onClick={OpenParenthesis}>(</Button>
						<Button onClick={CloseParenthesis}>)</Button>
						<Button onClick={() => NewNumber('e')}>e</Button>
						<Button onClick={() => NewOperator('%')}>%</Button>
					</ButtonContainer>
					<ButtonContainer col={1}>
						<Button onClick={Factorial}>!</Button>
						<Button onClick={SquareRoot}>√</Button>
						<Button onClick={CubeRoot}>∛</Button>
						<Empty />
					</ButtonContainer>
				</ButtonOuterContainer>
			</Container>
		</OuterContainer>
	)
}

export default Calculator
