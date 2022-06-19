import React from 'react'

import RGL, { WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import LocationProvider from 'Contexts/Location'

// Components
import Whiteboard from 'Components/Whiteboard/Whiteboard'
// import Clock from 'Components/Clock/Clock'
import Weather from 'Components/Weather/Weather'
import Map from 'Components/Map/Map'

import { SectionWrapper } from './Styles'

const ReactGridLayout = WidthProvider(RGL)

const App = () => {
	return (
		<LocationProvider>
			<ReactGridLayout
				layout={[
					{ i: 'whiteboard', x: 0, y: 0, w: 8, h: 8, static: true },
					{ i: 'images', x: 0, y: 8, w: 8, h: 4 },
					{ i: 'map', x: 8, y: 0, w: 4, h: 6, static: true },
					{ i: 'weather', x: 8, y: 6, w: 4, h: 6 },
				]}
				className='layout'
				items={4}
				rowHeight={41}
				cols={12}
				resizeHandles={['s', 'w', 'e', 'n', 'sw', 'nw', 'se', 'ne']}
			>
				<SectionWrapper key='whiteboard'>
					<Whiteboard />
				</SectionWrapper>
				<SectionWrapper key='images'>Images</SectionWrapper>
				<SectionWrapper key='map'>
					<Map />
				</SectionWrapper>
				<SectionWrapper key='weather'>
					<Weather />
				</SectionWrapper>
			</ReactGridLayout>
		</LocationProvider>
	)
}

export default App
