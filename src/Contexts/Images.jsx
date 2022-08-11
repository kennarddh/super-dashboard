import React, { createContext } from 'react'

import useLocalStorageState from 'Hooks/useLocalStorageState'

import { v4 as uuid } from 'uuid'

export const ImagesContext = createContext()

const ImagesProvider = ({ children }) => {
	const [Images, SetImages] = useLocalStorageState([], 'images_data')

	const AddImage = newImage => {
		SetImages(images => [...images, { id: uuid(), data: newImage }])
	}

	const RemoveImage = id => {
		SetImages(images =>
			images.filter(({ id: filterId }) => filterId !== id)
		)
	}

	return (
		<ImagesContext.Provider
			value={{
				Images,
				SetImages,
				AddImage,
				RemoveImage,
			}}
		>
			{children}
		</ImagesContext.Provider>
	)
}

export default ImagesProvider
