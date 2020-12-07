import React from 'react'

import { useGetAllTodosQuery } from '../../generated/graphql'
import TodoList from '../../components/TodoList'
import styled from 'styled-components'

const Home: React.FC = () => {
	// const { loading, error, data } = useQuery<Todos>(ALL_TODOS)

	const { loading, error, data } = useGetAllTodosQuery()

	if (loading) return <div>Loading</div>
	if (error) return <div>Error</div>

	return (
		<Base>
			<CtaSection>
				<CtaHeader>Welcome back!</CtaHeader>
				<CtaButton>New</CtaButton>
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
`

const CtaButton = styled.a`
	background: ${({ theme }) => theme.palette.tone.secondary};
	padding: 0.8em 1.8em;
	border-radius: 8px;
	/* color: ${({ theme }) => theme.palette.accent.medium}; */
	font-family: ${({ theme }) => theme.typo.size.medium};
	font-weight: ${({ theme }) => theme.typo.weight.bold};
`

export default Home
