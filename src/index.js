import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

import 'styles/global.scss'

import Navbar from 'components/commons/collections/navbar/navbar'
import Board from 'pages/Board/board'
import { ThemeProvider } from '@material-ui/core'
import theme from 'styles/theme'


ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route path="/" component={Board} />
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

reportWebVitals()
