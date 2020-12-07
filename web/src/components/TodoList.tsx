import React from 'react'
import styled from 'styled-components'
import Todo from './Todo/Todo'
import { GetAllTodosQuery } from '../generated/graphql'

const TodoList: React.FC<GetAllTodosQuery> = ({ todos }) => {
	return (
		<Base>
			{todos.map(({ ID, name, description, status, tags }) => {
				return (
					<Todo
						key={ID}
						ID={ID}
						name={name}
						description={description}
						status={status}
						tags={tags || undefined}
					/>
				)
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
