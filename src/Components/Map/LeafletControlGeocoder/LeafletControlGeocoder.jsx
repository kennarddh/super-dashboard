import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'
import 'leaflet-control-geocoder/dist/Control.Geocoder.js'
import leaflet from 'leaflet'

const LeafletControlGeocoder = () => {
	const map = useMap()

	useEffect(() => {
		const geocoder = leaflet.Control.Geocoder.nominatim()

		leaflet.Control.geocoder({
			query: '',
			placeholder: 'Search here...',
			defaultMarkGeocode: false,
			geocoder,
		})
			.on('markgeocode', function (e) {
				const latlng = e.geocode.center

				map.flyTo(latlng)
			})
			.addTo(map)
	}, [map])

	return null
}

export default LeafletControlGeocoder
