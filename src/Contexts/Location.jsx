import React, { createContext, useState } from 'react'

export const LocationContext = createContext()

const LocationProvider = ({ children }) => {
	const [Latitude, SetLatitude] = useState(0)
	const [Longitude, SetLongitude] = useState(0)
	const [TimezoneOffset, SetTimezoneOffset] = useState(0)

	return (
		<LocationContext.Provider
			value={{
				Latitude,
				SetLatitude,
				Longitude,
				SetLongitude,
				TimezoneOffset,
				SetTimezoneOffset,
			}}
		>
			{children}
		</LocationContext.Provider>
	)
}

export default LocationProvider
