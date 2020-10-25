import Link from 'next/link'
import Head from 'next/head'

const MainLayout = ({ children, title = 'NextJs App' }) => {
	return (
		<>
			<Head>
				<title>{title} | Next course</title>
			</Head>
			<nav>
				<Link href='/'>
					<a>Home</a>
				</Link>
				<Link href='/posts'>
					<a>Posts</a>
				</Link>
				<Link href='/about'>
					<a>About</a>
				</Link>
			</nav>
			<main>{children}</main>
			<style jsx>{`
				nav {
					position: fixed;
					left: 0;
					top: 0;
					right: 0;
					bottom: calc(100% - 50px);
					background: lightblue;
					display: flex;
					justify-content: space-around;
				}
				nav a {
					color: white;
				}
				main {
					margin-top: 60px;
				}
			`}</style>
		</>
	)
}

export default MainLayout
