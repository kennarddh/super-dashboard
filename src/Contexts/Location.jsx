import React, { createContext, useState } from 'react'

export const LocationContext = createContext()

const LocationProvider = ({ children }) => {
	const [Latitude, SetLatitude] = useState(0)
	const [Longitude, SetLongitude] = useState(0)
	const [Timezone, SetTimezone] = useState('UTC+0')

	return (
		<LocationContext.Provider
			value={{
				Latitude,
				SetLatitude,
				Longitude,
				SetLongitude,
				Timezone,
				SetTimezone,
			}}
		>
			{children}
		</LocationContext.Provider>
	)
}

export default LocationProvider
