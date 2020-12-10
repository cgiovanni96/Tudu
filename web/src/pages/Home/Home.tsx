import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { useGetAllTodosQuery } from '../../generated/graphql'
import TodoList from '../../components/TodoList'

const Home: React.FC = () => {
	// const { loading, error, data } = useQuery<Todos>(ALL_TODOS)

	const { loading, error, data } = useGetAllTodosQuery()

	if (loading) return <div>Loading</div>
	if (error) return <div>Error</div>

	console.log('data', data)
	return (
		<Base>
			<CtaSection>
				<CtaHeader>Welcome back!</CtaHeader>
				<CtaButton to="/new">New</CtaButton>
			</CtaSection>
			{data && <TodoList todos={data.todos} />}
		</Base>
	)
}

const Base = styled.section`
	width: 50%;
	margin-top: 3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`
const CtaSection = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const CtaHeader = styled.h2`
	font-size: ${({ theme }) => theme.typo.size.big};
	color: ${({ theme }) => theme.palette.tone.secondary};
`

const CtaButton = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.palette.text.primary};
	background: ${({ theme }) => theme.palette.tone.secondary};
	padding: 0.8em 1.8em;
	border-radius: 8px;
	font-family: ${({ theme }) => theme.typo.size.medium};
	font-weight: ${({ theme }) => theme.typo.weight.bold};
	box-shadow: 0 4px 8px rgba(33, 33, 34, 0.5);
	cursor: pointer;
	transition: 0.2s linear;

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 6px 10px rgba(33, 33, 34, 05);
	}
`

export default Home
