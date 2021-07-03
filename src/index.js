import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

import 'styles/global.scss'

import Navbar from 'components/commons/collections/navbar/navbar'
import Board from 'pages/Board/board'


ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path="/" component={Board} />
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)

reportWebVitals()
