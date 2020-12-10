import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {
	GetAllTodosDocument,
	useAddTodoMutation,
	GetAllTodosQuery
} from '../../generated/graphql'

interface FormData {
	name: string
	description: string
}

const New: React.FC = () => {
	const { register, handleSubmit } = useForm<FormData>()
	const [addTodo] = useAddTodoMutation()
	const navigate = useNavigate()

	const onSubmit = handleSubmit(async ({ name, description }) => {
		try {
			const { errors } = await addTodo({
				variables: {
					data: { name, description, status: 'Active' }
				},
				update: (cache, { data: addTodo }) => {
					const data: GetAllTodosQuery | null = cache.readQuery({
						query: GetAllTodosDocument
					})
					if (!addTodo) return null
					if (!data) return null
					cache.writeQuery({
						query: GetAllTodosDocument,
						data: { todos: [addTodo.addTodo, ...data.todos] }
					})
				}
			})
			if (errors) console.error(errors)
			if (!errors) navigate('/')
		} catch (e) {
			console.error(e)
		}
	})

	return (
		<Base>
			<FormSection>
				<Form onSubmit={onSubmit}>
					<Input
						type="text"
						ref={register}
						name="name"
						placeholder="Insert the name"
					/>

					<Description
						name="description"
						ref={register}
						placeholder="Insert your description"
						rows={4}
					/>

					<AddButton type="submit">Submit</AddButton>
				</Form>
			</FormSection>
		</Base>
	)
}

export default New

const Base = styled.section`
	margin-top: 2rem;
	width: 50%;
	display: flex;
	flex-direction: column;
`

const FormSection = styled.div`
	width: 80%;
	margin: auto;
	background: ${({ theme }) => theme.palette.accent.dark};
	border-radius: 16px;
`

const Form = styled.form`
	margin: auto;
	display: flex;
	flex-direction: column;
	padding: 2rem;
`

const Input = styled.input`
	margin-bottom: 1em;
	padding: 0.5em 1em;
	border: none;
	background: ${({ theme }) => theme.palette.accent.medium};
	color: ${({ theme }) => theme.palette.text.primary};
	font-size: ${({ theme }) => theme.typo.size.big};
	font-weight: ${({ theme }) => theme.typo.weight.bold};
	border-radius: 8px;
`

const Description = styled.textarea`
	margin-bottom: 1em;
	padding: 0.5em 1em;
	background: ${({ theme }) => theme.palette.accent.medium};
	color: ${({ theme }) => theme.palette.text.primary};
	font-size: ${({ theme }) => theme.typo.size.medium};
	border-radius: 8px;
	border: none;
	resize: none;
`

const AddButton = styled.button`
	width: 25%;
	margin: auto;
	padding: 1em 0.5em;
	border-radius: 8px;
	border: none;
	background: ${({ theme }) => theme.palette.tone.secondary};
	color: ${({ theme }) => theme.palette.text.primary};
	font-size: ${({ theme }) => theme.typo.size.medium};
	cursor: pointer;
`
