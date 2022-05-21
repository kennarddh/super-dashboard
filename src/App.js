import React from 'react'

import RGL, { WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

// Components
import Whiteboard from 'Components/Whiteboard/Whiteboard'

const ReactGridLayout = WidthProvider(RGL)

const App = () => {
	return (
		<ReactGridLayout
			layout={[
				{ i: 'whiteboard', x: 0, y: 0, w: 8, h: 8, static: true },
				{ i: 'images', x: 0, y: 8, w: 8, h: 4 },
				{ i: 'weather', x: 8, y: 0, w: 4, h: 6 },
				{ i: 'videoPlayer', x: 8, y: 6, w: 4, h: 6 },
			]}
			className='layout'
			items={4}
			rowHeight={41}
			cols={12}
			resizeHandles={['s', 'w', 'e', 'n', 'sw', 'nw', 'se', 'ne']}
		>
			<div key='whiteboard' style={{ border: '1px solid black' }}>
				<Whiteboard />
			</div>
			<div key='images' style={{ border: '1px solid black' }}>
				Images
			</div>
			<div key='weather' style={{ border: '1px solid black' }}>
				Weather
			</div>
			<div key='videoPlayer' style={{ border: '1px solid black' }}>
				Video Player
			</div>
		</ReactGridLayout>
	)
}

export default App
