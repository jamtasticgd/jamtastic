import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.scss'

import Navbar from './presentation/components/navbar/navbar'
import Board from './presentation/pages/Board/board'

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<body>
				<Switch>
					<Route path="/" component={Board} />
				</Switch>
			</body>
		</BrowserRouter>
	)
}

export default App
