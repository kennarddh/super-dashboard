import React from 'react'

import { TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import { StyledMapContainer } from './Styles.jsx'

const Map = () => {
	return (
		<StyledMapContainer center={[0, 0]} zoom={13} scrollWheelZoom>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
		</StyledMapContainer>
	)
}

export default Map
