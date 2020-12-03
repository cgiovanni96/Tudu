import React from 'react'

import { useGetAllTodosQuery } from '../../generated/graphql'
import TodoList from './TodoList'

const Home: React.FC = () => {
	// const { loading, error, data } = useQuery<Todos>(ALL_TODOS)

	const { loading, error, data } = useGetAllTodosQuery()

	if (loading) return <div>Loading</div>
	if (error) return <div>Error</div>

	return <>{data && <TodoList todos={data.todos} />}</>
}

export default Home
