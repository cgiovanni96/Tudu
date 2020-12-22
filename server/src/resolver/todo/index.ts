import { name } from 'faker'
import { Arg, Args, Mutation, Query, Resolver } from 'type-graphql'
import Tag from '../../database/entity/Tag'
import Todo from '../../database/entity/Todo'
import { StatusEnum } from '../../database/schema/StatusEnum'
import AddTodoInputType from './types/AddTodoInputType'
import UpdateTodoInputType from './types/UpdateTodoInputType'

@Resolver()
export default class TodoResolver {
	@Query(() => [Todo])
	async todos(): Promise<Todo[]> {
		try {
			const todos: Todo[] | null = await Todo.find({
				relations: ['tags'],
				order: {
					dueDate: 'DESC'
				}
			})
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
		try {
			const { name, description, dueDate, status, tags } = newTodoData
			const todo = await Todo.create({ name, description, dueDate, status })

			if (tags) {
				const todoTags = await Tag.findByIds(tags)
				todo.tags = todoTags
			}

			return todo.save()
		} catch {
			console.log('Something went wrong')
		}
	}

	@Mutation(() => Boolean, { nullable: true })
	async deleteTodo(@Arg('id') id: string): Promise<boolean | null> {
		try {
			await Todo.delete(id)
			return true
		} catch (e) {
			console.error(e.message)
			return false
		}
	}

	@Mutation(() => Todo, { nullable: true })
	async updateTodo(
		@Arg('id') id: string,
		@Arg('data') updateData: UpdateTodoInputType
	): Promise<Todo | null> {
		try {
			await Todo.update(id, { ...updateData })
			const updatedTodo = await Todo.findOne(id)
			if (updatedTodo) return updatedTodo
			else return null
		} catch {
			console.error('Something went wrong')
			return null
		}
	}

	@Mutation(() => Todo, { nullable: true })
	async completeTodo(@Arg('id') id: string): Promise<Todo | null> {
		try {
			await Todo.update(id, { status: StatusEnum.completed })
			const completedTodo = await Todo.findOne(id)
			if (completedTodo) return completedTodo
			else return null
		} catch {
			console.error('Something went wrong')
			return null
		}
	}
}
