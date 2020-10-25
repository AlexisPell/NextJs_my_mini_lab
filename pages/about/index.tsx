import Router from 'next/router'
import MainLayout from '../../components/MainLayout'

const About = ({ title }) => {
	const onClick = () => {
		Router.push('/')
	}

	return (
		<MainLayout title='About page'>
			<h1>{title}</h1>
			<button onClick={onClick}>Go back to main page</button>
			<button onClick={() => Router.push('/posts')}>Go to posts</button>
		</MainLayout>
	)
}

About.getInitialProps = async () => {
	const res = await fetch('http://localhost:3001/about')
	const data = await res.json()
	return { title: data.title }
}

export default About
