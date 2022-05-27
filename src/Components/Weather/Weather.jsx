import React, { useEffect, useState } from 'react'

const Weather = () => {
	const [WeatherData, SetWeatherData] = useState(null)

	useEffect(() => {
		const lat = '-6.1753942'
		const lon = '106.827183'

		fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
		)
			.then(response => response.json())
			.then(data => {
				SetWeatherData(data)
			})
			.catch(error => {
				console.log(error)
			})
	}, [])

	return (
		<div>
			{WeatherData ? (
				<p>{WeatherData.weather[0].description}</p>
			) : (
				<p>Loading</p>
			)}
		</div>
	)
}

export default Weather
