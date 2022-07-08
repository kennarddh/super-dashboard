import React, { useCallback, useState } from 'react'

import ReactPlayer, { canPlay } from 'react-player/youtube'

import {
	Toolbar,
	ToolbarButton,
	ToolbarInput,
} from 'Components/ToolBar/ToolBar'

const VideoPlayer = () => {
	const [Url, SetUrl] = useState(
		'https://www.youtube.com/watch?v=ysz5S6PUM-U'
	)

	const [PlayingUrl, SetPlayingUrl] = useState(
		'https://www.youtube.com/watch?v=ysz5S6PUM-U'
	)

	const OnUrlChange = useCallback(event => {
		SetUrl(event.target.value)
	}, [])

	const Play = useCallback(() => {
		const isCanPlay = canPlay(Url)

		if (isCanPlay) {
			SetPlayingUrl(Url)
		} else {
			// eslint-disable-next-line quotes
			alert("Can't play this video")
		}
	}, [Url])

	return (
		<>
			<Toolbar>
				<ToolbarInput
					type='text'
					placeholder='Youtube url'
					width='90%'
					value={Url}
					onChange={OnUrlChange}
				/>
				<ToolbarButton onClick={Play}>Play</ToolbarButton>
			</Toolbar>
			<ReactPlayer width='100%' height='90%' url={PlayingUrl} />
		</>
	)
}

export default VideoPlayer
