import React from 'react'
import styled from 'styled-components'
import Todo from '../../components/Todo'
import { GetAllTodosQuery } from '../../generated/graphql'

const TodoList: React.FC<GetAllTodosQuery> = ({ todos }) => {
	return (
		<Base>
			{todos.map(({ ID, name, description }) => {
				const big = description ? true : false
				return (
					<Todo
						big={big}
						key={ID}
						ID={ID}
						name={name}
						description={description}
					/>
				)
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
