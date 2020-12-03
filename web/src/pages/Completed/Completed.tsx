import React from 'react'
import { useGetAllTodosQuery } from '../../generated/graphql'
import TodoList from '../Home/TodoList'

const Completed: React.FC = () => {
	const { loading, error, data } = useGetAllTodosQuery()

	if (loading) return <div>Loading...</div>
	if (error || !data) return <div>Error</div>

	const completed = data.todos

	return <TodoList todos={completed} />
}

export default Completed
