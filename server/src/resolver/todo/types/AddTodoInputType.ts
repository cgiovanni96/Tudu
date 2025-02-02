import { IsArray, IsDate, IsIn } from 'class-validator'
import { Field, InputType } from 'type-graphql'
import { StatusArray } from '../../../database/schema/StatusEnum'

@InputType()
export default class AddTodoInputType {
	@Field({ nullable: false })
	name: string

	@Field({ nullable: true })
	description?: string

	@Field({ nullable: true })
	dueDate?: string

	@Field({ nullable: true })
	@IsIn([...StatusArray])
	status?: string

	@Field(() => [String], { nullable: true })
	@IsArray()
	tags?: string[]
}
