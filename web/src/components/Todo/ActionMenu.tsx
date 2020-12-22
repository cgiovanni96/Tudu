import React from 'react'
import styled from 'styled-components'
import { DoneOutline as CompletedIcon } from '@styled-icons/material-twotone/DoneOutline'
import { Edit as EditIcon } from '@styled-icons/material-outlined/Edit'
import { Delete as DeleteIcon } from '@styled-icons/material-outlined/Delete'
import {
	TodosFieldsFragment,
	useCompleteTodoMutation
} from '../../generated/graphql'

interface ActionMenuProps {
	todo: TodosFieldsFragment
}

const ActionMenu: React.FC<ActionMenuProps> = ({ todo }) => {
	const [completeTodo] = useCompleteTodoMutation()
	const completeOnClick = async () => {
		const { errors } = await completeTodo({
			variables: {
				id: todo.id,
				status: 'Completed'
			}
		})

		if (errors) console.error('Error!')
	}

	return (
		<TodoAction>
			<ActionElement>
				<CompletedIcon size={24} onClick={completeOnClick} />
			</ActionElement>

			<ActionElement>
				<EditIcon size={24} />
			</ActionElement>

			<ActionElement>
				<DeleteIcon size={24} />
			</ActionElement>
		</TodoAction>
	)
}

export default ActionMenu

const TodoAction = styled.ul`
	margin-left: auto;
	display: flex;
	border-radius: 8px;
	border: 2px solid ${({ theme }) => theme.palette.accent.light};
`

const ActionElement = styled.li`
	color: ${({ theme }) => theme.palette.accent.light};
	padding: 5px 10px;
	border-right: 2px solid ${({ theme }) => theme.palette.accent.light};
	cursor: pointer;
	transition: 0.2s linear;

	&:last-child {
		border-right: none;
	}

	&:hover {
		color: ${({ theme }) => theme.palette.tone.primary};
	}
`
