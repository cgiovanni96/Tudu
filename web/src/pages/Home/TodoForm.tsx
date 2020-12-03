import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

interface TodoData {
	title: string
	description: string
}

const TodoForm: React.FC = () => {
	const { register, handleSubmit } = useForm<TodoData>()
	const onSubmit = handleSubmit(({ title, description }) => {
		console.log(title, description)
	})

	return (
		<Form onSubmit={onSubmit}>
			<InputTitle name="title" placeholder="add the title" ref={register} />
			<AddButton type="submit">Add</AddButton>
			<HiddenPanel>
				<input
					name="description"
					placeholder="add the description"
					ref={register}
				/>
			</HiddenPanel>
		</Form>
	)
}

export default TodoForm

const Form = styled.form`
	margin-top: 2em;
	width: 40%;
	display: flex;
	justify-content: space-between;
	background: #e5e5e5;
	padding: 2em;
	border-radius: 16px;
`

const InputTitle = styled.input`
	padding: 1em;
	border: none;
	background: transparent;
`

const AddButton = styled.button`
	border: none;
	padding: 1em 2em;
	border-radius: 8px;

	cursor: pointer;
	transition: 0.2s linear;

	&:hover {
		transform: translateY(-2px);
	}
`

const HiddenPanel = styled.div`
	display: none;
`
