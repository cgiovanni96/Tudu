import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

interface ItemProp {
	to: string
}

// need to use a number instead of a boolean because
// styled-components + react-router-dom give me an error with boolean
// https://github.com/styled-components/styled-components/issues/1198
interface NavLinkProp {
	readonly current?: number
}

const Navbar: React.FC = () => {
	return (
		<Nav>
			<Title>Tudu</Title>
			<Navigation>
				<Item to="/">All</Item>
				<Item to="/actives">Actives</Item>
				<Item to="/completed">Completed</Item>
			</Navigation>
			<User>Hoodfc</User>
		</Nav>
	)
}

const Item: React.FC<ItemProp> = (prop) => {
	const { pathname } = useLocation()
	const current = pathname == prop.to ? 1 : 0
	return (
		<NavItem>
			<NavLink to={prop.to} current={current}>
				{prop.children}
			</NavLink>
		</NavItem>
	)
}

export default Navbar

const Nav = styled.div`
	display: flex;
	width: 100%;
	height: 80px;
	align-items: center;
	padding: 20px 0;
	/* background: ${({ theme }) => theme.palette.accent.light}; */
	/* font-size: ${({ theme }) => theme.typo.size.big}; */
	font-size: 16px;
`
const Title = styled.h1`
	flex: 1;
	margin-left: 1rem;
	/* font-size: ${({ theme }) => theme.typo.size.title}; */
	font-weight: ${({ theme }) => theme.typo.weight.bold};
	color: ${({ theme }) => theme.palette.tone.primary};
	text-align: center;
	font-size: 20px;
`
const Navigation = styled.ul`
	flex: 2;
	display: flex;
	justify-content: center;
`

const NavItem = styled.li`
	padding: 0 1em;
`

const NavLink = styled(Link)<NavLinkProp>`
	text-decoration: none;
	color: ${({ current, theme }) =>
		current ? theme.palette.tone.primary : theme.palette.text.secondary};
`

const User = styled.div`
	flex: 1;
	margin-right: 20px;
	display: flex;
	justify-content: center;
	color: ${({ theme }) => theme.palette.text.secondary};
	font-weight: ${({ theme }) => theme.typo.weight.bold};
`
