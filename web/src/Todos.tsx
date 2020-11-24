import { gql, useQuery } from '@apollo/client'
import React from 'react'

interface Todo {
	ID: string
	name: string
	description: string
}

interface Todos {
	todos: Todo[]
}

const ALL_TODOS = gql`
	query GetAllTodos {
		todos {
			ID
			name
			description
		}
	}
`

const Todos: React.FC = () => {
	const { loading, error, data } = useQuery<Todos>(ALL_TODOS)

	if (loading) return <div>Loading</div>
	if (error) return <div>Error</div>

	console.log(data)
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
