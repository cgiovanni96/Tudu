import React from 'react'
import styled from 'styled-components'
import { useGetAllTodosQuery } from './generated/graphql'

const Todo = styled.div`
	background: ${({ theme }) => theme.color.primary};
	color: ${({ theme }) => theme.color.text.primary};
`

const Todos: React.FC = () => {
	// const { loading, error, data } = useQuery<Todos>(ALL_TODOS)

	const { loading, error, data } = useGetAllTodosQuery()

	if (loading) return <div>Loading</div>
	if (error) return <div>Error</div>

	return (
		<>
			{data &&
				data.todos.map(({ ID, name, description }) => {
					return (
						<Todo key={ID}>
							<h1>{name}</h1>
							<p>{description}</p>
						</Todo>
					)
				})}
		</>
	)
}

export default Todos
