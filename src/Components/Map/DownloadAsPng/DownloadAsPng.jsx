import React, { useMemo } from 'react'

// import { useMap } from 'react-leaflet'

import { Button, Container } from './Styles'

const DownloadAsPng = () => {
	// const parentMap = useMap()

	const buttonComponent = useMemo(() => <Button>Download as PNG</Button>, [])

	return (
		<Container>
			<div className='leaflet-control leaflet-bar'>{buttonComponent}</div>
		</Container>
	)
}

export default DownloadAsPng
