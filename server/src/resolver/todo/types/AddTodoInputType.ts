import { Field, InputType } from 'type-graphql'
import Todo from '../../../database/entity/Todo'

@InputType()
export default class AddTodoInputType implements Partial<Todo> {
	@Field({ nullable: false })
	name: string

	@Field({ nullable: true })
	description?: string

	@Field({ nullable: true })
	dueDate?: Date
}
