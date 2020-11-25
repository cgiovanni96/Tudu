import React from 'react'
import { useGetAllTodosQuery } from './generated/graphql'

interface Todo {
	ID: string
	name: string
	description: string
}

interface Todos {
	todos: Todo[]
}

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
						<div key={ID}>
							<h1>{name}</h1>
							<p>{description}</p>
						</div>
					)
				})}
		</>
	)
}

export default Todos
