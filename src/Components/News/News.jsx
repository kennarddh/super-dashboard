import React, { useState, useRef } from 'react'

import InfiniteScroll from 'react-infinite-scroller'

import Loader from 'Components/Loader/Loader'

import { ArticleContainer, Container } from './Styles'

import Article from 'Components/News/Article/Article'

const News = () => {
	const [Articles, SetArticles] = useState([])
	const [PageSize] = useState(10)

	const [HasMoreArticles, SetHasMoreArticles] = useState(true)

	const IsLoadingRef = useRef(false)

	const LoadMore = page => {
		if (page > 10) return SetHasMoreArticles(false)

		if (IsLoadingRef.current) return

		const controller = new AbortController()
		const signal = controller.signal

		IsLoadingRef.current = true

		fetch(
			`https://newsapi.org/v2/everything?q=react%20js&language=en&pageSize=${PageSize}&page=${page}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
			{ signal }
		)
			.then(response => response.json())
			.then(data => {
				SetArticles(articles => {
					const newArticles = [...articles, ...data.articles]

					const urls = []

					IsLoadingRef.current = false

					return newArticles.filter(article => {
						if (urls.includes(article.url)) return false

						urls.push(article.url)

						return true
					})
				})
			})

		return () => controller.abort()
	}

	return (
		<Container>
			<InfiniteScroll
				pageStart={0}
				loadMore={LoadMore}
				hasMore={HasMoreArticles}
				loader={<Loader key='loader' size={50} center />}
				useWindow={false}
			>
				<ArticleContainer>
					{Articles.map(article => (
						<Article article={article} key={article.url} />
					))}
				</ArticleContainer>
			</InfiniteScroll>
		</Container>
	)
}

export default News