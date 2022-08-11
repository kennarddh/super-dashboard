import { useEffect, useState, useMemo } from 'react'

const useLocalStorageState = (init, key, optionsParam) => {
	const { serializer, parser } = useMemo(
		() => ({
			serializer: JSON.stringify,
			parser: JSON.parse,
			...optionsParam,
		}),
		[optionsParam]
	)

	const [Value, SetValue] = useState(() => {
		const value = localStorage.getItem(key)

		if (!value) return init

		let parsed

		try {
			parsed = parser(value)
		} catch (error) {
			throw new Error('Parsing failed', { cause: error })
		}

		return parsed
	})

	useEffect(() => {
		let serialized

		try {
			serialized = serializer(Value)
		} catch (error) {
			throw new Error('Serializing failed', { cause: error })
		}

		localStorage.setItem(key, serialized)
	}, [Value, key, serializer])

	return [Value, SetValue]
}

export default useLocalStorageState
