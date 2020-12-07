import React from 'react'
import { useGetAllTodosQuery } from '../../generated/graphql'
import TodoList from '../../components/TodoList'

const Completed: React.FC = () => {
	const { loading, error, data } = useGetAllTodosQuery()

	if (loading) return <div>Loading...</div>
	if (error || !data) return <div>Error</div>

	const completed = data.todos.filter((t) => {
		return t.status.toLowerCase() === 'completed' ? true : false
	})

	return <TodoList todos={completed} />
}

export default Completed
