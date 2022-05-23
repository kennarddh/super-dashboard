import React, { useState, useCallback, useRef } from 'react'

import CanvasDraw from 'react-canvas-draw'

import {
	ToolBar,
	ToolBarInput,
	ToolBarButton,
} from 'Components/ToolBar/ToolBar'

const Whiteboard = () => {
	const [BrushColor, SetBrushColor] = useState('#000000')
	const [BrushRadius, SetBrushRadius] = useState(5)

	const [IsDisabled, SetIsDisabled] = useState(false)

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
				<ToolBarButton onClick={ResetView}>Reset View</ToolBarButton>
				<ToolBarButton onClick={Download}>Download</ToolBarButton>
				<ToolBarButton onClick={Save}>Save</ToolBarButton>
				<ToolBarButton onClick={Load}>Load</ToolBarButton>
				<ToolBarButton onClick={ToggleIsDisabled}>
					{IsDisabled ? 'Enable' : 'Disable'}
				</ToolBarButton>
			</ToolBar>
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
