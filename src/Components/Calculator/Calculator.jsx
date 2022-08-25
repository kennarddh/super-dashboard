import React, { useState } from 'react'

import {
	OuterContainer,
	Container,
	Display,
	Button,
	ButtonContainer,
	ButtonOuterContainer,
	Empty,
} from './Styles'

const Calculator = () => {
	const [Expression, SetExpression] = useState('')
	const [CurrentNumber, SetCurrentNumber] = useState(0)

	return (
		<OuterContainer>
			<Container>
				<Display>{CurrentInput}</Display>
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
						<Empty></Empty>
					</ButtonContainer>
				</ButtonOuterContainer>
			</Container>
		</OuterContainer>
	)
}

export default Calculator
