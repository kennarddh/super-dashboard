import React, { forwardRef, useImperativeHandle, useState } from 'react'

import ReactPortal from 'Components/ReactPortal/ReactPortal'

import { ModalContainer, ModalContent } from './Styles'

const Modal = ({ wrapperId, containerProps, contentProps, children }, ref) => {
	const [IsOpen, SetIsOpen] = useState(false)

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
			{IsOpen && (
				<ModalContainer {...containerProps}>
					<ModalContent {...contentProps}>{children}</ModalContent>
				</ModalContainer>
			)}
		</ReactPortal>
	)
}

export default forwardRef(Modal)

export { ModalContainer, ModalContent }
