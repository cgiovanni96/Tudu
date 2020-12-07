import React from 'react'
import { useGetAllTodosQuery } from '../../generated/graphql'
import TodoList from '../../components/TodoList'

const Actives: React.FC = () => {
	const { loading, error, data } = useGetAllTodosQuery()

	if (loading) return <div>Loading...</div>
	if (error || !data) return <div>Error</div>

	const actives = data.todos.filter((t) => {
		return t.status.toLowerCase() === 'completed' ? false : true
	})

	return <TodoList todos={actives} />
}

export default Actives
