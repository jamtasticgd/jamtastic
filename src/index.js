import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import { ToastContainer } from 'react-toastify'

import 'styles/global.scss'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from 'components/commons/collections/navbar/navbar'
import Board from 'pages/Board/board'
import { ThemeProvider } from '@material-ui/core'
import LoaderContextProvider from 'contexts/LoaderContext'
import UserContextProvider from 'contexts/UserContext'

import theme from 'styles/theme'

ReactDOM.render(
	<React.StrictMode>
		<LoaderContextProvider>
			<UserContextProvider>
				<ThemeProvider theme={theme}>
					<BrowserRouter>
						<Navbar />
						<ToastContainer autoClose={false} />
						<Switch>
							<Route path="/" component={Board} />
						</Switch>
					</BrowserRouter>
				</ThemeProvider>
			</UserContextProvider>
		</LoaderContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

reportWebVitals()
