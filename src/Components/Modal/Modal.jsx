import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

import ReactPortal from 'Components/ReactPortal/ReactPortal'

import useClickOutside from 'Hooks/useClickOutside'

import { ModalContainer, ModalContent } from './Styles'

const Modal = (
	{
		wrapperId,
		containerProps,
		contentProps,
		overrideOpen,
		isOpen,
		onClose, // eslint-disable-line no-unused-vars
		children,
	},
	ref
) => {
	const [IsOpen, SetIsOpen] = useState(false)

	const ModalContentRef = useRef()

	const OnClickOutside = () => {
		document.body.style.overflow = 'unset'

		if (overrideOpen) {
			onClose()

			return
		}

		SetIsOpen(false)
	}

	useClickOutside(ModalContentRef, OnClickOutside)

	useImperativeHandle(ref, () => ({
		Open() {
			document.body.style.overflow = 'hidden'

			SetIsOpen(true)
		},
		Close() {
			document.body.style.overflow = 'unset'

			SetIsOpen(false)
		},
	}))

	return (
		<ReactPortal wrapperId={wrapperId}>
			{((overrideOpen && isOpen) || IsOpen) && (
				<ModalContainer {...containerProps}>
					<ModalContent ref={ModalContentRef} {...contentProps}>
						{children}
					</ModalContent>
				</ModalContainer>
			)}
		</ReactPortal>
	)
}

export default forwardRef(Modal)
