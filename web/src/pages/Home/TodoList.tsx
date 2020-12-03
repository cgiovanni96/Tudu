import React from 'react'
import styled from 'styled-components'
import Todo from '../../components/Todo'

import { GetAllTodosQuery } from '../../generated/graphql'

interface TodoListProps {
	todos: GetAllTodosQuery
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
	return (
		<Base>
			{todos.todos.map(({ ID, name, description }) => {
				return <Todo key={ID} ID={ID} name={name} description={description} />
			})}
		</Base>
	)
}

export default TodoList

const Base = styled.ul`
	width: 60%;
	margin: auto;
	margin-top: 4rem;
	display: flex;
	flex-direction: column;
`
