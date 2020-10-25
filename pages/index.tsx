import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../components/MainLayout'

const Index = () => {
	return (
		<MainLayout>
			<Head>
				<title>Next Home Title</title>
				<meta name='keywords' content='next, node, js, react' />
				<meta name='description' content='Next js main page' />
				<meta charSet='utf-8' />
			</Head>
			<h1>Hello Next</h1>
			<Link href='/'>
				<a>Home</a>
			</Link>
			<br />
			<Link href='/about'>
				<a>About</a>
			</Link>
			<br />
			<Link href={'/posts'}>
				<a>Posts</a>
			</Link>
		</MainLayout>
	)
}

export default Index
