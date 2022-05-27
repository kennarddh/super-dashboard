import React, { useEffect, useState } from 'react'

import {
	Toolbar,
	ToolbarButton,
	ToolbarInput,
} from 'Components/Toolbar/Toolbar'

const Weather = () => {
	const [WeatherData, SetWeatherData] = useState()
	const [Latitude, SetLatitude] = useState(-6.1753942)
	const [Longitude, SetLongitude] = useState(106.827183)
	const [Search, SetSearch] = useState('')
  
  const getPosition = async () => {
		await navigator.geolocation.getCurrentPosition(
			position => {
				setLatitude(position.coords.latitude)
				setLongitude(position.coords.longitude)
			},
			err => console.log(err)
		)
	}

	useEffect(() => {
		getPosition()
	}, [])

	useEffect(() => {
		const controller = new AbortController()
		const signal = controller.signal

		fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${Latitude}&lon=${Longitude}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
			{ signal }
		)
			.then(response => response.json())
			.then(data => {
				SetWeatherData(data)
			})
			.catch(error => {
				console.log(error)
			})

		return () => controller.abort()
	}, [Latitude, Longitude])

	const ChangeLocation = () => {
		fetch(
			`http://api.openweathermap.org/geo/1.0/direct?q=${Search}&limit=1&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
		)
			.then(response => response.json())
			.then(data => {
				SetLatitude(data[0].lat)
				SetLongitude(data[0].lon)
			})
			.catch(error => {
				console.log(error)
			})
		SetSearch('')
	}

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
		<>
			<Toolbar>
				<ToolbarInput
					type='text'
					placeholder='Location'
					value={Search}
					onChange={event => {
						SetSearch(event.target.value)
					}}
				/>
				<ToolbarButton onClick={ChangeLocation}>Search</ToolbarButton>
			</Toolbar>
			{WeatherData?.weather && WeatherData.weather.length > 0 ? (
				<p>{WeatherData.weather[0].description}</p>
			) : (
				<p>Loading</p>
			)}
		</>
	)
}

export default React.memo(Weather)
