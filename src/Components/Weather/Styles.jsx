import styled from 'styled-components'

export const Autocomplete = styled.div`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	background-color: #fff;
	border: 1px solid #ccc;
	border-radius: 0 0 4px 4px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	z-index: 1;
	overflow-y: auto;
	max-height: 200px;

	&::-webkit-scrollbar {
		width: 0px;
	}
`

export const AutocompleteItem = styled.button`
	display: block;
	width: 100%;
	padding: 5px;
	border: none;
	border-bottom: 1px solid #ccc;

	cursor: pointer;

	&:hover {
		background-color: #f5f5f5;
	}

	&:last-child {
		border-bottom: none;
	}
`

export const InputContainer = styled.div`
	position: relative;
	width: 100%;
`

export const Container = styled.div`
	width: 100%;
	height: 90%;
	background-color: ${({ theme }) => theme.widget.container};
	color: ${({ theme }) => theme.widget.color};
`
