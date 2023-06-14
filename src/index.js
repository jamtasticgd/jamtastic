import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
	<React.StrictMode>
		<LoaderContextProvider>
			<UserContextProvider>
				<ThemeProvider theme={theme}>
					<BrowserRouter>
						<Navbar />
						<ToastContainer autoClose={false} />
						<Routes>
							<Route path="/" element={<Board />} />
						</Routes>
					</BrowserRouter>
				</ThemeProvider>
			</UserContextProvider>
		</LoaderContextProvider>
	</React.StrictMode>
)

reportWebVitals()
