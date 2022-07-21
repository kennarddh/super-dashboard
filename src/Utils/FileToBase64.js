const ImageUploadToBase64 = file =>
	new Promise((resolve, reject) => {
		const reader = new FileReader()

		reader.addEventListener('load', () => {
			resolve(reader.result)
		})

		reader.addEventListener('error', () => {
			reject(new Error(`Error occurred reading file: ${file.name}`))
		})

		reader.readAsDataURL(file)
	})

export default ImageUploadToBase64
