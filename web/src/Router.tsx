import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Actives from './pages/Actives/Actives'
import Completed from './pages/Completed/Completed'

const Router: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/actives" element={<Actives />} />
					<Route path="/completed" element={<Completed />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default Router
