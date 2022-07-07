import React from 'react'

import RGL, { WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import 'react-tabs/style/react-tabs.css'

import LocationProvider from 'Contexts/Location'

// Components
// import Whiteboard from 'Components/Whiteboard/Whiteboard'
import Clock from 'Components/Clock/Clock'
import Weather from 'Components/Weather/Weather'
import Map from 'Components/Map/Map'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import News from 'Components/News/News'

import { SectionWrapper } from './Styles'

const ReactGridLayout = WidthProvider(RGL)

const App = () => {
	return (
		<LocationProvider>
			<Tabs>
				<TabList>
					<Tab>News</Tab>
					<Tab>Page 2</Tab>
				</TabList>

				<TabPanel>
					<News />
				</TabPanel>
				<TabPanel>
					<ReactGridLayout
						layout={[
							{
								i: 'whiteboard',
								x: 0,
								y: 0,
								w: 8,
								h: 8,
								static: true,
							},
							{ i: 'images', x: 0, y: 8, w: 8, h: 4 },
							{
								i: 'clock',
								x: 8,
								y: 0,
								w: 4,
								h: 6,
								static: true,
							},
							{ i: 'weather', x: 8, y: 6, w: 4, h: 6 },
						]}
						className='layout'
						items={4}
						rowHeight={41}
						cols={12}
						resizeHandles={[
							's',
							'w',
							'e',
							'n',
							'sw',
							'nw',
							'se',
							'ne',
						]}
					>
						<SectionWrapper key='whiteboard'>
							<Map />
						</SectionWrapper>
						<SectionWrapper key='images'>Images</SectionWrapper>
						<SectionWrapper key='clock'>
							<Clock />
						</SectionWrapper>
						<SectionWrapper key='weather'>
							<Weather />
						</SectionWrapper>
					</ReactGridLayout>
				</TabPanel>
			</Tabs>
		</LocationProvider>
	)
}

export default App
