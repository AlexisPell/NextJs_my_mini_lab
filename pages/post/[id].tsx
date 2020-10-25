import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import MainLayout from '../../components/MainLayout'
import { NextPageContext } from 'next'
import { MyPost } from '../../interfaces/post'

interface PostPageProps {
	post: MyPost
	pageId: string | number
}

const Post = ({ post: serverPost, pageId }: PostPageProps) => {
	const [post, setPost] = useState(serverPost)
	const router = useRouter()

	useEffect(() => {
		const load = async () => {
			const res = await fetch(`http://localhost:3001/posts/${router.query.id}`)
			const data = await res.json()
			setPost(data)
		}
		if (!post) {
			load()
		}
	}, [])

	if (!post) {
		return (
			<MainLayout>
				<h1>Loading...</h1>
			</MainLayout>
		)
	}

	console.log('router', router)
	return (
		<MainLayout title={`post №${router.query.id}`}>
			<h1 style={{ display: 'inline-block', marginRight: '10px' }}>
				Post №{router.query.id}
			</h1>
			<h1 style={{ display: 'inline-block' }}>Post: {pageId} </h1>
			<hr />
			<h2>{post.title}</h2>
			<h3>{post.body}</h3>
			<hr />
			<Link href='/posts'>
				<h3>Back to posts</h3>
			</Link>
		</MainLayout>
	)
}

// Post.getInitialProps = async ({ query, req }) => {
// 	console.log('ctx', query, req)
// 	// Обозначает что мы еще не на фронтенде
// 	if (!req) {
// 		return { post: null }
// 	}
// 	const res = await fetch(`http://localhost:3001/posts/${query.id}`)
// 	const post = await res.json()
// 	let pageId = query.id
// 	return { post, pageId }
// }

interface PostNextPageContext extends NextPageContext {
	query: {
		id: string
	}
}

export async function getServerSideProps({ query, req }: PostNextPageContext) {
	console.log('ctx', query, req)
	// Здесь можно не опасаться и не делать такую проверку:
	// if (!req) {
	// 	return { post: null }
	// }
	const res = await fetch(`http://localhost:3001/posts/${query.id}`)
	const post: MyPost = await res.json()
	let pageId = query.id
	return { props: { post, pageId } }
}

export default Post
