import { useEffect, useRef } from 'react'

import { useMap } from 'react-leaflet'

import leaflet from 'leaflet'

import 'leaflet-control-geocoder/dist/Control.Geocoder.css'
import 'leaflet-control-geocoder/dist/Control.Geocoder'

const LeafletControlGeocoder = () => {
	const map = useMap()

	const IsCreatedRef = useRef(false)

	useEffect(() => {
		if (IsCreatedRef.current) return

		const geocoder = leaflet.Control.Geocoder.nominatim()

		leaflet.Control.geocoder({
			query: '',
			placeholder: 'Search here...',
			defaultMarkGeocode: false,
			geocoder,
		})
			.on('markgeocode', event => {
				const latlng = event.geocode.center

				map.flyTo(latlng)
			})
			.addTo(map)

		IsCreatedRef.current = true
	}, [map])

	return null
}

export default LeafletControlGeocoder
