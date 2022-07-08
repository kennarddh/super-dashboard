import React, { useState, useCallback, useRef } from 'react'

import CanvasDraw from 'react-canvas-draw'

import {
	Toolbar,
	ToolbarButton,
	ToolbarInput,
} from 'Components/ToolBar/ToolBar'

const Whiteboard = () => {
	const [BrushColor, SetBrushColor] = useState('#000000')
	const [BrushRadius, SetBrushRadius] = useState(5)

	const [IsDisabled, SetIsDisabled] = useState(false)

	const CanvasDrawRef = useRef(null)

	const OnBrushColorChange = useCallback(event => {
		SetBrushColor(event.target.value)
	}, [])

	const OnBrushRadiusChange = useCallback(event => {
		let value = event.target.value

		if (value < 1) value = 1
		if (value > 50) value = 50

		SetBrushRadius(parseInt(value, 10))
	}, [])

	const Undo = useCallback(() => {
		CanvasDrawRef.current.undo()
	}, [CanvasDrawRef])

	const EraseAll = useCallback(() => {
		CanvasDrawRef.current.eraseAll()
	}, [CanvasDrawRef])

	const Clear = useCallback(() => {
		CanvasDrawRef.current.clear()
	}, [CanvasDrawRef])

	const ResetView = useCallback(() => {
		CanvasDrawRef.current.resetView()
	}, [CanvasDrawRef])

	const Download = useCallback(() => {
		const link = document.createElement('a')

		link.href = CanvasDrawRef.current.getDataURL()
		link.download = 'whiteboard.jpg'

		link.click()
	}, [CanvasDrawRef])

	const Save = useCallback(() => {
		const data = CanvasDrawRef.current.getSaveData()

		localStorage.setItem('whiteboard_data', data)
	}, [CanvasDrawRef])

	const Load = useCallback(() => {
		const data = localStorage.getItem('whiteboard_data')

		if (!data) return

		CanvasDrawRef.current.loadSaveData(data)
	}, [CanvasDrawRef])

	const ToggleIsDisabled = useCallback(() => {
		SetIsDisabled(isDisabled => !isDisabled)
	}, [])

	return (
		<>
			<Toolbar>
				<ToolbarInput
					type='color'
					value={BrushColor}
					onChange={OnBrushColorChange}
				/>
				<ToolbarInput
					type='number'
					width='50px'
					value={BrushRadius}
					onChange={OnBrushRadiusChange}
				/>
				<ToolbarButton onClick={Undo}>Undo</ToolbarButton>
				<ToolbarButton onClick={EraseAll}>Erase All</ToolbarButton>
				<ToolbarButton onClick={Clear}>Clear</ToolbarButton>
				<ToolbarButton onClick={ResetView}>Reset View</ToolbarButton>
				<ToolbarButton onClick={Download}>Download</ToolbarButton>
				<ToolbarButton onClick={Save}>Save</ToolbarButton>
				<ToolbarButton onClick={Load}>Load</ToolbarButton>
				<ToolbarButton onClick={ToggleIsDisabled}>
					{IsDisabled ? 'Enable' : 'Disable'}
				</ToolbarButton>
			</Toolbar>
			<CanvasDraw
				ref={CanvasDrawRef}
				saveData={localStorage.getItem('save_data')}
				enablePanAndZoom
				brushRadius={BrushRadius}
				brushColor={BrushColor}
				immediateLoading={true}
				lazyRadius={0}
				disabled={IsDisabled}
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
