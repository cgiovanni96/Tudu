import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

interface ItemProp {
	to: string
}

interface NavLinkProp {
	readonly current?: boolean
}

const Navbar: React.FC = () => {
	return (
		<Nav>
			<Title>TUDU</Title>
			<Navigation>
				<Item to="/">All</Item>
				<Item to="/actives">Actives</Item>
				<Item to="/completed">Completed</Item>
			</Navigation>
			<User>GIO</User>
		</Nav>
	)
}

const Item: React.FC<ItemProp> = (prop) => {
	const { pathname } = useLocation()
	const current = pathname == prop.to ? true : false
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
	margin-top: 20px;
	width: 100%;
	height: 80px;
	border-bottom: 4px solid ${({ theme }) => theme.color.primary};
	display: flex;
	align-items: center;
	font-family: ${({ theme }) => theme.typo.detail.family};
	font-size: ${({ theme }) => theme.typo.detail.size};
`
const Title = styled.h1`
	flex: 1;
	margin-left: 1rem;
	font-family: ${({ theme }) => theme.typo.title.family};
	font-size: ${({ theme }) => theme.typo.title.size};
	font-weight: ${({ theme }) => theme.typo.title.weight};
	text-align: center;
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
	margin: 0 1em;
	font-weight: ${({ theme }) => theme.typo.detail.weight};
	text-decoration: none;
	color: ${({ current, theme }) =>
		current ? theme.color.primary : theme.color.text.secondary};
`

const User = styled.div`
	flex: 1;
	margin-right: 20px;
	display: flex;
	justify-content: center;
`
