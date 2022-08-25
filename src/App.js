import React from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import RGL, { WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import 'react-tabs/style/react-tabs.css'

import LocationProvider from 'Contexts/Location'
import ImagesProvider from 'Contexts/Images'

// Components
import Whiteboard from 'Components/Whiteboard/Whiteboard'
import Images from 'Components/Images/Images'
import Clock from 'Components/Clock/Clock'
import Weather from 'Components/Weather/Weather'
import Map from 'Components/Map/Map'
import News from 'Components/News/News'
import Users from 'Components/Users/Users'
import CurrencyConverter from 'Components/CurrencyConverter/CurrencyConverter'
import Calculator from 'Components/Calculator/Calculator'

import { SectionWrapper } from './Styles'

const ReactGridLayout = WidthProvider(RGL)

const App = () => {
	return (
		<ImagesProvider>
			<LocationProvider>
				<Tabs>
					<TabList>
						<Tab>Page 1</Tab>
						<Tab>Page 2</Tab>
						<Tab>Page 3</Tab>
						<Tab>Page 4</Tab>
					</TabList>

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
							<SectionWrapper key='clock'>
								<Clock />
							</SectionWrapper>
							<SectionWrapper key='weather'>
								<Weather />
							</SectionWrapper>
						</ReactGridLayout>
					</TabPanel>

					<TabPanel>
						<ReactGridLayout
							layout={[
								{
									i: 'news',
									x: 0,
									y: 0,
									w: 8,
									h: 8,
									static: true,
								},
								{
									i: 'users',
									x: 8,
									y: 0,
									w: 4,
									h: 6,
									static: true,
								},
							]}
							className='layout'
							items={1}
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
							<SectionWrapper key='news'>
								<News />
							</SectionWrapper>
							<SectionWrapper key='users'>
								<Users />
							</SectionWrapper>
						</ReactGridLayout>
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
									i: 'currencyConverter',
									x: 8,
									y: 0,
									w: 4,
									h: 6,
									static: true,
								},
							]}
							className='layout'
							items={1}
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
								<Whiteboard />
							</SectionWrapper>
							<SectionWrapper key='images'>
								<Images />
							</SectionWrapper>
							<SectionWrapper key='currencyConverter'>
								<CurrencyConverter />
							</SectionWrapper>
						</ReactGridLayout>
					</TabPanel>

					<TabPanel>
						<ReactGridLayout
							layout={[
								{
									i: 'calculator',
									x: 8,
									y: 0,
									w: 4,
									h: 8,
									static: true,
								},
							]}
							className='layout'
							items={1}
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
							<SectionWrapper key='calculator'>
								<Calculator />
							</SectionWrapper>
						</ReactGridLayout>
					</TabPanel>
				</Tabs>
			</LocationProvider>
		</ImagesProvider>
	)
}

export default App
