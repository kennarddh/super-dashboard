import React, { useRef, useMemo, useContext, useEffect } from 'react'

import { Marker, Popup, useMap } from 'react-leaflet'

import DefaultIcon from 'Components/Map/Marker/Default/Default'

import { LocationContext } from 'Contexts/Location'

const Draggable = () => {
	const { Latitude, Longitude, SetLatitude, SetLongitude } =
		useContext(LocationContext)

	const MarkerRef = useRef(null)

	const Map = useMap()

	const FirstRef = useRef(false)

	useEffect(() => {
		if (!FirstRef.current) {
			FirstRef.current = true

			return
		}

		Map.flyTo(
			{
				lat: Latitude,
				lng: Longitude,
			},
			Map.getZoom()
		)
	}, [Latitude, Longitude])

	const eventHandlers = useMemo(
		() => ({
			dragend() {
				if (MarkerRef.current === null) return

				const lanLon = MarkerRef.current.getLatLng()

				SetLatitude(lanLon.lat)
				SetLongitude(lanLon.lng)
			},
		}),
		[]
	)

	return (
		<Marker
			draggable={true}
			eventHandlers={eventHandlers}
			position={{
				lat: Latitude,
				lng: Longitude,
			}}
			ref={MarkerRef}
			icon={DefaultIcon}
		>
			<Popup>You are here</Popup>
		</Marker>
	)
}

export default Draggable
