import { useEffect } from 'react'

import {} from './DownloadAsPNGLeafletPlugin'
import L from 'leaflet'
import { useMap } from 'react-leaflet'

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
