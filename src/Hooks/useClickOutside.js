import { useEffect } from 'react'

const useClickOutside = (ref, onClickOutsideCallback) => {
	const CheckClickOutside = event => {
		if (!ref.current) throw new Error('useClickOutside hook invalid ref')

		if (ref.current.contains(event.target)) return

		if (ref.current === event.target) return

		onClickOutsideCallback()
	}

	useEffect(() => {
		document.addEventListener('mousedown', CheckClickOutside)

		return () => {
			document.removeEventListener('mousedown', CheckClickOutside)
		}
	}, [ref, CheckClickOutside])
}

export default useClickOutside
