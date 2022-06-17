import React, { useMemo, useCallback, useState } from 'react'

import { useMap, useMapEvent, Rectangle } from 'react-leaflet'
import { useEventHandlers } from '@react-leaflet/core'

const Bounds = ({ parentMap, zoom }) => {
	const [Bounds, SetBounds] = useState(parentMap.getBounds())

	const minimap = useMap()

	const OnClick = useCallback(
		event => {
			parentMap.setView(event.latlng, parentMap.getZoom())
		},
		[parentMap]
	)

	const OnChange = useCallback(() => {
		SetBounds(parentMap.getBounds())

		// Update the minimap's view to match the parent map's center and zoom
		minimap.setView(parentMap.getCenter(), zoom)
	}, [minimap, parentMap, zoom])

	// Listen to events on the parent map
	const Handlers = useMemo(
		() => ({ move: OnChange, zoom: OnChange }),
		[OnChange]
	)

	useMapEvent('click', OnClick)
	useEventHandlers({ instance: parentMap }, Handlers)

	return <Rectangle bounds={Bounds} pathOptions={{ weight: 1 }} />
}

export default Bounds
