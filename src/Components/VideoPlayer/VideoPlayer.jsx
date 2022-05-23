import React, { useCallback, useState } from 'react'
import ReactPlayer from 'react-player/youtube'

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

	const OnPlay = useCallback(() => {
		ReactPlayer.canPlay(Url)

		SetPlayingUrl(Url)
	}, [Url])

	return (
		<>
			<input
				type='text'
				placeholder='Youtube url'
				onChange={OnUrlChange}
			/>
			<button onClick={OnPlay}>Play</button>
			<ReactPlayer width='100%' height='90%' url={PlayingUrl} />
		</>
	)
}

export default VideoPlayer
