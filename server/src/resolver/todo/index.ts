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

	@Mutation(() => Todo)
	async addTodo(@Arg('data') newTodoData: AddTodoInputType): Promise<Todo> {
		const { name, description, dueDate } = newTodoData
		try {
			const todo = await Todo.create({ name, description, dueDate })

			return todo.save()
		} catch {
			console.log('Something went wrong')
		}
	}
}
