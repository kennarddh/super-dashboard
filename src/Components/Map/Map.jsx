import React from 'react'

import { TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import Minimap from './Minimap/Minimap'

import DraggableMarker from './Marker/Draggable/Draggable'

import LeafletControlGeocoder from './LeafletControlGeocoder/LeafletControlGeocoder'

import { StyledMapContainer } from './Styles'

const Map = () => {
	return (
		<StyledMapContainer center={[0, 0]} zoom={13} scrollWheelZoom>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<DraggableMarker />
			<LeafletControlGeocoder />
			<Minimap position='bottomleft' />
		</StyledMapContainer>
	)
}

export default Map
