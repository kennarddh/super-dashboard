import React, { useEffect, useState } from 'react'

const Weather = () => {
	const [WeatherData, SetWeatherData] = useState(null)
	const [lat, setLat] = useState(0)
	const [lon, setLon] = useState(0)

	const getPosition = async () => {
		await navigator.geolocation.getCurrentPosition(
			position => {
				setLat(position.coords.latitude)
				setLon(position.coords.longitude)
			},
			err => console.log(err)
		)
	}

	useEffect(() => {
		getPosition()
	}, [])

	useEffect(() => {
		if (lat !== 0 && lon !== 0) {
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
		}
	}, [lat, lon])

	return (
		<div>
			{WeatherData?.weather && WeatherData.weather.length > 0 ? (
				<p>{WeatherData.weather[0].description}</p>
			) : (
				<p>Loading</p>
			)}
		</div>
	)
}

export default React.memo(Weather)
