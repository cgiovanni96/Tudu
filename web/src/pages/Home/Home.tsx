import React from 'react'
import styled from 'styled-components'
import { useGetAllTodosQuery } from '../../generated/graphql'

import { CalendarToday as PlanIcon } from '@styled-icons/material-outlined/CalendarToday'
import { BuildCircle as ProgressIcon } from '@styled-icons/material-outlined/BuildCircle'
import { DoneOutline as CompletedIcon } from '@styled-icons/material/DoneOutline'
import TodoForm from './TodoForm'

const Home: React.FC = () => {
	// const { loading, error, data } = useQuery<Todos>(ALL_TODOS)

	const { loading, error, data } = useGetAllTodosQuery()

	if (loading) return <div>Loading</div>
	if (error) return <div>Error</div>

	return (
		<>
			<TodoForm />
			<TodoList>
				{data &&
					data.todos.map(({ ID, name, description }) => {
						return (
							<Todo key={ID}>
								<TodoMain>
									<TodoTitle>{name}</TodoTitle>
									<TodoDesc>{description}</TodoDesc>
								</TodoMain>

								<TodoDetail>
									<TodoStatus>In progress</TodoStatus>
									<TodoIconContainer>
										<ProgressIcon size="24" />

										<PlanIcon size="24" />

										<CompletedIcon size="24" />
									</TodoIconContainer>
								</TodoDetail>
							</Todo>
						)
					})}
			</TodoList>
		</>
	)
}

export default Home

const TodoList = styled.ul`
	width: 60%;
	margin: auto;
	margin-top: 4rem;
	display: flex;
	flex-direction: column;
`

const Todo = styled.li`
	margin: 1em 0;
	padding: 1.5em 0 2em 1em;
	border-radius: 1em;
	border-top: 2px solid #1bd671;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
	background: #fff;

	display: flex;
`
const TodoMain = styled.div`
	flex: 5;
`

const TodoDetail = styled.div`
	flex: 1;
`

const TodoTitle = styled.h1`
	padding-bottom: 1em;
	padding-left: 0.5em;
	font-family: ${({ theme }) => theme.typo.title.family};
	font-weight: ${({ theme }) => theme.typo.title.weight};
	font-size: 20px;
`

const TodoDesc = styled.p`
	padding-left: 2em;
	font-family: ${({ theme }) => theme.typo.detail.family};
	color: ${({ theme }) => theme.color.text.secondary};
`

const TodoStatus = styled.div``

const TodoIconContainer = styled.div`
	margin-top: 1em;
	cursor: pointer;

	& > * {
		margin-right: 8px;
	}
`
