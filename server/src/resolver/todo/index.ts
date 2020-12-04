import { name } from 'faker'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import Todo from '../../database/entity/Todo'
import AddTodoInputType from './types/AddTodoInputType'

@Resolver()
export default class TodoResolver {
	@Query(() => [Todo])
	async todos(): Promise<Todo[]> {
		try {
			const todos: Todo[] | null = await Todo.find()
			return todos
		} catch {
			console.log('Something went wrong')
		}
	}

	@Query(() => Todo, { nullable: true })
	todo(@Arg('name') name: string): Promise<Todo | null> {
		try {
			return Todo.findOneOrFail({ where: { name } })
		} catch (e) {
			console.error('Something went wrong ', e.message)
			return null
		}
	}

	@Mutation(() => Todo)
	async addTodo(@Arg('data') newTodoData: AddTodoInputType): Promise<Todo> {
		const { name, description, dueDate, status } = newTodoData
		try {
			const todo = await Todo.create({ name, description, dueDate, status })

			return todo.save()
		} catch {
			console.log('Something went wrong')
		}
	}

	@Mutation(() => Boolean, { nullable: true })
	async deleteTodo(@Arg('name') name: string): Promise<boolean | null> {
		try {
			await Todo.delete({ name })
			return true
		} catch (e) {
			console.error(e.message)
			return false
		}
	}

	@Mutation(() => Boolean, { nullable: true })
	async updateTodo(@Arg('name') name: string): Promise<boolean | false> {
		try {
			Todo.update({ name }, {})
			return true
		} catch {
			console.error('Something went wrong')
			return false
		}
	}
}
