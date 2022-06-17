import React, { useMemo } from 'react'

import { MapContainer, useMap, TileLayer } from 'react-leaflet'

import PositionClasses from 'Constants/Leaflet/PositionClasses'

import Bounds from './Bounds'

const Minimap = ({ position, zoom }) => {
	const parentMap = useMap()
	const mapZoom = zoom || 0

	// Memoize the minimap so it's not affected by position changes
	const minimap = useMemo(
		() => (
			<MapContainer
				style={{ height: 80, width: 80 }}
				center={parentMap.getCenter()}
				zoom={mapZoom}
				dragging={false}
				doubleClickZoom={false}
				scrollWheelZoom={false}
				attributionControl={false}
				zoomControl={false}
			>
				<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
				<Bounds parentMap={parentMap} zoom={mapZoom} />
			</MapContainer>
		),
		[mapZoom, parentMap]
	)

	const positionClass =
		(position && PositionClasses[position]) || PositionClasses.topright

	return (
		<div className={positionClass}>
			<div className='leaflet-control leaflet-bar'>{minimap}</div>
		</div>
	)
}

export default Minimap
