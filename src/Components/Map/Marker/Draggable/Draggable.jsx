import React, { useRef, useState, useMemo, useContext, useEffect } from 'react'

import { Marker, Popup, useMap } from 'react-leaflet'

import DefaultIcon from 'Components/Map/Marker/Default/Default'

import { LocationContext } from 'Contexts/Location'

const Draggable = () => {
	const [Position, SetPosition] = useState({
		lat: 0,
		lng: 0,
	})

	const { Latitude, Longitude, SetLatitude, SetLongitude } =
		useContext(LocationContext)

	const MarkerRef = useRef(null)

	const Map = useMap()

	const FirstRef = useRef(false)

	useEffect(() => {
		console.log({ FirstRef: FirstRef.current, Latitude, Longitude })
		if (!FirstRef.current) {
			FirstRef.current = true

			return
		}

		SetPosition({ lat: Latitude, lng: Longitude })

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

				SetPosition(MarkerRef.current.getLatLng())
				SetLatitude(MarkerRef.current.getLatLng().lat)
				SetLongitude(MarkerRef.current.getLatLng().lng)
			},
		}),
		[]
	)

	return (
		<Marker
			draggable={true}
			eventHandlers={eventHandlers}
			position={Position}
			ref={MarkerRef}
			icon={DefaultIcon}
		>
			<Popup>You are here</Popup>
		</Marker>
	)
}

export default Draggable
