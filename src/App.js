import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Board from './presentation/pages/Board'

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Board} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
