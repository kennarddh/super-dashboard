import styled from 'styled-components'

export const Container = styled.article`
	border: 1px solid black;
	padding: 20px;
	width: 90%;
	border-radius: 15px;
	display: flex;
	align-items: center;
	gap: 20px;
`

export const Image = styled.img`
	width: 300px;
`

export const Body = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`

export const Title = styled.h3`
	margin: 0;
`

export const Description = styled.p`
	margin: 0;
`
