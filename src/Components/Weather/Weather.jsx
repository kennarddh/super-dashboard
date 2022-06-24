import React, { useEffect, useState } from 'react'

import { Toolbar, ToolbarInput } from 'Components/ToolBar/ToolBar'

import { AutocompleteItem, Autocomplete, InputContainer } from './Styles.jsx'

import { LocationContext } from 'Contexts/Location'
import { useContext } from 'react'

const Weather = () => {
	const [WeatherData, SetWeatherData] = useState()

	const {
		Latitude,
		SetLatitude,
		Longitude,
		SetLongitude,
		SetTimezoneOffset,
	} = useContext(LocationContext)

	const [Search, SetSearch] = useState('')

	const [AutocompleteData, SetAutocompleteData] = useState([])

	const GetPosition = () => {
		navigator.geolocation.getCurrentPosition(
			position => {
				SetLatitude(position.coords.latitude)
				SetLongitude(position.coords.longitude)
			},
			err => console.log(err)
		)
	}

	useEffect(() => {
		GetPosition()
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

	useEffect(() => {
		if (Latitude === 0 && Longitude === 0) return

		const controller = new AbortController()
		const signal = controller.signal

		fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${Latitude}&lon=${Longitude}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
			{ signal }
		)
			.then(response => response.json())
			.then(data => {
				SetWeatherData(data)
				SetTimezoneOffset(data.timezone)
			})
			.catch(error => {
				console.log(error)
			})

		return () => controller.abort()
	}, [Latitude, Longitude])

	useEffect(() => {
		SetAutocompleteData([])

		if (Search.length < 3) return

		const controller = new AbortController()
		const signal = controller.signal

		fetch(
			`https://nominatim.openstreetmap.org/search?q=${Search}&limit=5&format=json&addressdetails=1`,
			{ signal }
		)
			.then(response => response.json())
			.then(data => {
				SetAutocompleteData(data)
			})
			.catch(error => {
				console.log(error)
			})

		return () => controller.abort()
	}, [Search])

	const ChangeLocation = (lat, lon) => {
		SetLatitude(lat)
		SetLongitude(lon)

		SetAutocompleteData([])
	}

	return (
		<>
			<Toolbar>
				<InputContainer>
					<ToolbarInput
						type='text'
						placeholder='Location'
						value={Search}
						onChange={event => {
							SetSearch(event.target.value)
						}}
						width='100%'
					/>
					<Autocomplete>
						{AutocompleteData &&
							AutocompleteData.map(item => (
								<AutocompleteItem
									onClick={() =>
										ChangeLocation(item.lat, item.lon)
									}
									key={item.place_id}
								>
									{item.display_name}
								</AutocompleteItem>
							))}
					</Autocomplete>
				</InputContainer>
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
