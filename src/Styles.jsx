import styled from 'styled-components'

export const SectionWrapper = styled.div`
	border: 1px solid black;
`

export const ScrollXSectionWrapper = styled(SectionWrapper)`
	overflow-x: scroll;
`

export const ScrollYSectionWrapper = styled(SectionWrapper)`
	overflow-y: scroll;
`

export const Container = styled.div`
	background-color: ${({ theme }) => theme.backgroundColor};
	min-height: 100vh;
`
