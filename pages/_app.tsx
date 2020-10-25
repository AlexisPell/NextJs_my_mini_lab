import './../styles/main.css'
import ProgressBar from 'nextjs-progressbar'

const myApp = ({ Component, pageProps }) => {
	return (
		<>
			<ProgressBar
				color='yellow'
				startPosition='0.3'
				stopDelayMs='200'
				height='5'
			/>
			<Component {...pageProps} />
			<style jsx global>
				{`
					body {
						font-family: 'Roboto', sans-serif;
						font-family: 'Syne Tactile', cursive;
					}
				`}
			</style>
		</>
	)
}

export default myApp
