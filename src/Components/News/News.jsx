import React, { useState } from 'react'

import InfiniteScroll from 'react-infinite-scroller'

import Loader from 'Components/Loader/Loader'

import { ArticleContainer, Article, Container } from './Styles'

const News = () => {
	const [Articles, SetArticles] = useState([])
	const [PageSize] = useState(10)

	const [HasMoreArticles, SetHasMoreArticles] = useState(true)

	const LoadMore = page => {
		if (page > 10) return SetHasMoreArticles(false)

		fetch(
			`https://newsapi.org/v2/everything?q=react%20js&language=en&pageSize=${PageSize}&page=${page}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
		)
			.then(response => response.json())
			.then(data => {
				SetArticles(articles => {
					const newArticles = [...articles, ...data.articles]

					const urls = []

					return newArticles.filter(article => {
						if (urls.includes(article.url)) return false

						urls.push(article.url)

						return true
					})
				})
			})
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
						<Article key={article.url}>
							<p>{article.source.name}</p>
							<p>{article.title}</p>
							<p>{article.description}</p>
							<p>{article.url}</p>
						</Article>
					))}
				</ArticleContainer>
			</InfiniteScroll>
		</Container>
	)
}

export default News
