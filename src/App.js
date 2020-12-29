import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.scss'

import Navbar from './presentation/components/navbar/navbar'
import Board from './presentation/pages/Board'

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path="/" component={Board} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
