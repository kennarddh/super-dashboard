import React, { useState, useCallback, useRef } from 'react'

import CanvasDraw from 'react-canvas-draw'

import { ToolBar, ToolBarInput, ToolBarButton } from './Styles'

const Whiteboard = () => {
	const [BrushColor, SetBrushColor] = useState('#000000')
	const [BrushRadius, SetBrushRadius] = useState(5)

	const CanvasDrawRef = useRef(null)

	const OnBrushColorChange = useCallback(
		event => {
			SetBrushColor(event.target.value)
		},
		[BrushColor]
	)

	const OnBrushRadiusChange = useCallback(
		event => {
			let value = event.target.value

			if (value < 1) value = 1
			if (value > 50) value = 50

			SetBrushRadius(parseInt(value, 10))
		},
		[BrushRadius]
	)

	const Undo = useCallback(() => {
		CanvasDrawRef.current.undo()
	}, [CanvasDrawRef])

	const EraseAll = useCallback(() => {
		CanvasDrawRef.current.eraseAll()
	}, [CanvasDrawRef])

	const Clear = useCallback(() => {
		CanvasDrawRef.current.clear()
	}, [CanvasDrawRef])

	return (
		<>
			<ToolBar>
				<ToolBarInput
					type='color'
					value={BrushColor}
					onChange={OnBrushColorChange}
				/>
				<ToolBarInput
					type='number'
					width='50px'
					value={BrushRadius}
					onChange={OnBrushRadiusChange}
				/>
				<ToolBarButton onClick={Undo}>Undo</ToolBarButton>
				<ToolBarButton onClick={EraseAll}>Erase All</ToolBarButton>
				<ToolBarButton onClick={Clear}>Clear</ToolBarButton>
			</ToolBar>
			<CanvasDraw
				ref={CanvasDrawRef}
				enablePanAndZoom
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
