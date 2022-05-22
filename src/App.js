import React from 'react'

import RGL, { WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

// Components
import Whiteboard from 'Components/Whiteboard/Whiteboard'

import { SectionWrapper } from './Styles'

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
			<SectionWrapper key='whiteboard'>
				<Whiteboard />
			</SectionWrapper>
			<SectionWrapper key='images'>Images</SectionWrapper>
			<SectionWrapper key='weather'>Weather</SectionWrapper>
			<SectionWrapper key='videoPlayer'>Video Player</SectionWrapper>
		</ReactGridLayout>
	)
}

export default App
