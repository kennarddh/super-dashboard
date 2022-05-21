import React, { useState, useCallback } from 'react'

import CanvasDraw from 'react-canvas-draw'

const Whiteboard = () => {
	const [BrushColor, SetBrushColor] = useState('#000000')
	const [BrushRadius, SetBrushRadius] = useState(5)

	const OnBrushColorChange = useCallback(
		event => {
			SetBrushColor(event.target.value)
		},
		[BrushColor]
	)

	const OnBrushRadiusChange = useCallback(
		event => {
			SetBrushRadius(event.target.value)
		},
		[BrushRadius]
	)

	return (
		<>
			<div>
				<input
					type='color'
					value={BrushColor}
					onChange={OnBrushColorChange}
				/>
				<input
					type='number'
					value={BrushRadius}
					onChange={OnBrushRadiusChange}
				/>
			</div>
			<CanvasDraw
				brushRadius={BrushRadius}
				brushColor={BrushColor}
				style={{
					width: '100%',
					height: '90%',
					boxShadow:
						'0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3)',
				}}
			/>
		</>
	)
}
export default Whiteboard
