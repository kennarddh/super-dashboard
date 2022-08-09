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
		if (overrideOpen) {
			onClose()

			return
		}

		SetIsOpen(false)
	}

	useClickOutside(ModalContentRef, OnClickOutside)

	useImperativeHandle(ref, () => ({
		Open() {
			SetIsOpen(true)
		},
		Close() {
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
