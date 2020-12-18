import { Field, InputType } from 'type-graphql'
import { IsEnum } from 'class-validator'
import { StatusEnum } from '../../../database/schema/StatusEnum'

@InputType()
export default class UpdateTodoInputType {
	@Field({ nullable: true })
	name: string

	@Field({ nullable: true })
	description: string

	@Field({ nullable: true })
	dueDate: string

	@Field({ nullable: true })
	@IsEnum(StatusEnum)
	status: string
}
