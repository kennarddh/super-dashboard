import React from 'react'

import RGL, { WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

const ReactGridLayout = WidthProvider(RGL)

const App = () => {
	const items = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'17',
		'18',
		'19',
		'20',
	]

	const layout = items.map(i => {
		const y = Math.ceil(Math.random() * 4) + 1

		return {
			x: (i * 2) % 12,
			y: Math.floor(i / 6) * y,
			w: 2,
			h: y,
			i: i.toString(),
		}
	})

	const OnLayoutChange = layout => {
		console.log('layout', layout)
	}

	return (
		<ReactGridLayout
			layout={layout}
			onLayoutChange={OnLayoutChange}
			{...{
				className: 'layout',
				items: 20,
				rowHeight: 30,
				cols: 12,
				resizeHandles: ['s', 'w', 'e', 'n', 'sw', 'nw', 'se', 'ne'],
			}}
		>
			{items.map(i => (
				<div key={i} style={{ border: '1px solid black' }}>
					<span className='text'>{i}</span>
				</div>
			))}
		</ReactGridLayout>
	)
}

export default App
