import { useEffect } from 'react'

import L from 'leaflet'
import { useMap } from 'react-leaflet'

import {} from './DownloadAsPNGLeafletPlugin'

const DownloadAsPng = () => {
	const map = useMap()

	useEffect(() => {
		const control = new L.Control.DownloadAsPNG({})

		map.addControl(control)

		return () => map.removeControl(control)
	}, [map])

	return null
}

export default DownloadAsPng
