import React, { useRef, useState, useMemo } from 'react'

import { Marker, Popup } from 'react-leaflet'

import DefaultIcon from 'Components/Map/Marker/Default/Default'

const Draggable = () => {
	const [Position, SetPosition] = useState({
		lat: 0,
		lng: 0,
	})

	const MarkerRef = useRef(null)

	const eventHandlers = useMemo(
		() => ({
			dragend() {
				if (MarkerRef.current === null) return

				SetPosition(MarkerRef.current.getLatLng())
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
