import React from 'react'
import { useForm } from 'react-hook-form'

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
		<form onSubmit={onSubmit}>
			<input name="title" placeholder="add the title" ref={register} />

			<input
				name="description"
				placeholder="add the description"
				ref={register}
			/>

			<button type="submit">Add</button>
		</form>
	)
}

export default TodoForm
