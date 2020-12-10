import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Actives from './pages/Actives/Actives'
import Completed from './pages/Completed/Completed'
import New from './pages/New/New'

const Router: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Wrapper>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/actives" element={<Actives />} />
						<Route path="/completed" element={<Completed />} />
						<Route path="/new" element={<New />} />
					</Routes>
				</Wrapper>
			</BrowserRouter>
		</>
	)
}

export default Router

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
