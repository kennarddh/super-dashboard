const GetDocumentVerticalCenter = () => {
	return (
		(window.scrollY < document.body.clientHeight / 2
			? window.scrollY
			: window.scrollY * -1) +
		window.innerHeight / 2
	)
}

export default GetDocumentVerticalCenter
