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

	@Mutation(() => Boolean, { nullable: true })
	async updateTodo(
		@Arg('name') name: string,
		@Arg('data') updateData: UpdateTodoInputType
	): Promise<boolean | null> {
		try {
			Todo.update({ name }, { ...updateData })
			return true
		} catch {
			console.error('Something went wrong')
			return false
		}
	}

	@Mutation(() => Boolean, { nullable: true })
	async completeTodo(@Arg('id') id: string): Promise<boolean | null> {
		try {
			Todo.update(id, { status: StatusEnum.completed })
			return true
		} catch {
			console.error('Something went wrong')
			return false
		}
	}
}
