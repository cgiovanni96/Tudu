import React from 'react'
import styled from 'styled-components'
import { DoneOutline as CompletedIcon } from '@styled-icons/material-twotone/DoneOutline'
import { Edit as EditIcon } from '@styled-icons/material-outlined/Edit'
import { Delete as DeleteIcon } from '@styled-icons/material-outlined/Delete'
import { Link } from 'react-router-dom'
import { useGetStatus } from '../utils/useGetStatus'

interface TodoProps {
	ID: string
	name: string
	description: string
	big: boolean
	status: string
}

const Todo: React.FC<TodoProps> = ({ name, description, big, status }) => {
	const statusColor = useGetStatus(status)

	return (
		<Base big={big}>
			<TodoHeader>
				<TodoTitle to="/">{name}</TodoTitle>
				<TodoAction>
					<ActionElement>
						<CompletedIcon size={24} />
					</ActionElement>

					<ActionElement>
						<EditIcon size={24} />
					</ActionElement>

					<ActionElement>
						<DeleteIcon size={24} />
					</ActionElement>
				</TodoAction>
			</TodoHeader>
			{big ? (
				<TodoMain>
					<TodoDescription>{description}</TodoDescription>
				</TodoMain>
			) : (
				''
			)}
			<TodoFooter>
				<Status color={statusColor}> {status} </Status>
				<TagList>
					<Tag>tag</Tag>
					<Tag>tag</Tag>
					<Tag>tag</Tag>
				</TagList>
				<ProjectName color={'#406CDE'} to="/">
					Tudu
				</ProjectName>
			</TodoFooter>
		</Base>
	)
}

export default Todo

interface BaseProps {
	big: boolean
}

const Base = styled.li<BaseProps>`
	min-height: ${(props) => (props.big ? '180px' : '120px')};
	padding: 30px 30px 10px 30px;
	margin-bottom: 3rem;
	border-radius: 16px;
	background: ${({ theme }) => theme.palette.accent.medium};
	border: 1px solid ${({ theme }) => theme.palette.accent.dark};
	display: flex;
	flex-direction: column;
`

const TodoHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 1em;
`

const TodoTitle = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.palette.text.primary};
	font-weight: ${({ theme }) => theme.typo.weight.bold};
	font-size: ${({ theme }) => theme.typo.size.big};
	transition: 0.2s linear;

	&:hover {
		color: ${({ theme }) => theme.palette.tone.primary};
	}
`

const TodoAction = styled.ul`
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

const TodoMain = styled.div`
	flex: 1;
`

const TodoDescription = styled.p`
	padding-left: 2em;
	font-size: ${({ theme }) => theme.typo.size.medium};
	color: ${({ theme }) => theme.palette.text.secondary};
`

const TodoFooter = styled.div`
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

interface StatusProps {
	color: string
}

const Status = styled.div<StatusProps>`
	padding: 10px 20px;
	border-radius: 16px;
	color: ${(props) => props.color};
	border: 1px solid ${(props) => props.color};
	font-size: ${({ theme }) => theme.typo.size.medium};
`

const TagList = styled.ul`
	flex: 1;
	display: flex;
	margin-left: 2em;
	font-size: ${({ theme }) => theme.typo.size.small};
`

const Tag = styled.li`
	margin-right: 1em;
	padding: 5px 10px;
	border-radius: 8px;
	border: 1px solid ${({ theme }) => theme.palette.accent.light};
	color: ${({ theme }) => theme.palette.accent.light};
`
interface ProjectNameProps {
	color: string
}

const ProjectName = styled(Link)<ProjectNameProps>`
	font-weight: ${({ theme }) => theme.typo.weight.bold};
	text-decoration: none;
	color: ${(props) =>
		props.color ? props.color : props.theme.palette.text.primary};
`
