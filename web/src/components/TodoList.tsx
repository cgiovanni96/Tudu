import React from 'react'
import styled from 'styled-components'
import Todo from './Todo/Todo'
import { GetAllTodosQuery } from '../generated/graphql'

const TodoList: React.FC<GetAllTodosQuery> = ({ todos }) => {
	return (
		<Base>
			{todos.map((todo) => {
				return <Todo key={todo.id} todo={todo} />
			})}
		</Base>
	)
}

export default TodoList

const Base = styled.ul`
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
`
