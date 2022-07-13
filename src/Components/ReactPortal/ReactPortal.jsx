import { useState, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'

const CreateWrapperAndAppendToBody = wrapperId => {
	const wrapperElement = document.createElement('div')

	wrapperElement.setAttribute('id', wrapperId)

	document.body.appendChild(wrapperElement)

	return wrapperElement
}

const ReactPortal = ({ children, wrapperId = 'react-portal-wrapper' }) => {
	const [WrapperElement, SetWrapperElement] = useState(null)

	useLayoutEffect(() => {
		let element = document.getElementById(wrapperId)

		let isCreated = false

		// if element is not found with wrapperId or wrapperId is not provided,
		// create and append to body
		if (!element) {
			isCreated = true

			element = CreateWrapperAndAppendToBody(wrapperId)
		}

		SetWrapperElement(element)

		return () => {
			// delete the programatically created element
			if (!(isCreated && element.parentNode)) return

			element.parentNode.removeChild(element)
		}
	}, [wrapperId])

	// wrapperElement state will be null on very first render.
	if (WrapperElement === null) return null

	return createPortal(children, WrapperElement)
}

export default ReactPortal
