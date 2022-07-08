import React, { useState, useEffect } from 'react'

import { Container, HandContainer, Hand } from './Styles'

const Single = ({ offset }) => {
	const [Time, SetTime] = useState({})

	useEffect(() => {
		const utcOffset = new Date().getTimezoneOffset()

		const date = new Date(
			new Date().getTime() +
				offset * 1000 -
				utcOffset * 60 * 1000 +
				10 * 1000 * 60 * 60
		)

		const intervalId = setInterval(() => {
			SetTime(time => {
				let newDate = date

				if (time?.date) {
					newDate = new Date(time.date.getTime() + 1 * 1000 + 1)
				}

				return {
					hour: newDate.getHours(),
					minute: newDate.getMinutes(),
					second: newDate.getSeconds(),
					date: newDate,
				}
			})
		}, 1000)

		return () => clearInterval(intervalId)
	}, [offset])

	return (
		<Container size={100}>
			<HandContainer deg={(360 / 24) * Time?.hour}>
				<Hand width={3} height={30} color='#000000' />
			</HandContainer>
			<HandContainer deg={(360 / 60) * Time?.minute}>
				<Hand width={2} height={35} color='#000000' />
			</HandContainer>
			<HandContainer deg={(360 / 60) * Time?.second}>
				<Hand width={1} height={35} color='#ff0000' />
			</HandContainer>
		</Container>
	)
}

export default Single
