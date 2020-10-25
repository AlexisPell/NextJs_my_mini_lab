import Router from 'next/router'
import MainLayout from '../components/MainLayout'
import classes from './../styles/error.module.scss'

export default function ErrorPage() {
	return (
		<MainLayout>
			<h1 className={classes.error}>
				Ooops... Looks like you have got an error
			</h1>
			<button onClick={() => Router.push('/')}>Back to main</button>
		</MainLayout>
	)
}
