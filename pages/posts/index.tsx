import { useState, useEffect } from 'react'

import Link from 'next/link'
import Router from 'next/router'
import MainLayout from '../../components/MainLayout'
import { MyPost } from '../../interfaces/post'
import { NextPageContext } from 'next'

interface PostsPageProps {
	posts: MyPost[]
}

const Posts = ({ posts: serverPosts }: PostsPageProps) => {
	const [posts, setPosts] = useState(serverPosts)

	useEffect(() => {
		async function load() {
			const res = await fetch('http://localhost:3001/posts')
			const body = await res.json()
			setPosts(body)
		}
		if (!serverPosts) {
			load()
		}
	}, [])

	if (!posts) {
		return (
			<MainLayout>
				<h1>Loading posts...</h1>
			</MainLayout>
		)
	}

	return (
		<MainLayout title='Posts page'>
			<h1>Posts page</h1>
			<hr />
			<pre>
				<ul>
					{posts.map((post) => (
						<Link href={`/post/${post.id}`}>
							<li
								key={post.id}
								style={{
									background: 'pink',
									padding: '5px',
									marginBottom: '1px',
									listStyleType: 'none',
								}}
							>
								<span>{post.title}</span>
							</li>
						</Link>
					))}
				</ul>
			</pre>
			<hr />
			<Link href='/'>
				<a>Link home</a>
			</Link>
			<br />
			<button onClick={() => Router.push('/')}>Router go home</button>
		</MainLayout>
	)
}

Posts.getInitialProps = async ({ req }: NextPageContext) => {
	if (!req) {
		return { posts: null }
	}
	const res = await fetch('http://localhost:3001/posts')
	const posts: MyPost[] = await res.json()

	return { posts }
}

export default Posts
