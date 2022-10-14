import styled from 'styled-components'

export const Autocomplete = styled.div`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	background-color: ${({ theme }) =>
		theme.widget.weather.autocomplete.backgroundColor};

	border: 1px solid
		${({ theme }) => theme.widget.weather.autocomplete.borderColor};

	border-radius: 0 0 4px 4px;
	z-index: 1;
	overflow-y: auto;
	max-height: 200px;
`

export const AutocompleteItem = styled.button`
	display: block;
	width: 100%;
	padding: 5px;
	border: none;
	border-bottom: 1px solid #ccc;

	background-color: ${({ theme }) =>
		theme.widget.weather.autocomplete.backgroundColor};

	color: ${({ theme }) => theme.widget.weather.autocomplete.color};

	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.widget.weather.autocomplete.hoverColor};
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
