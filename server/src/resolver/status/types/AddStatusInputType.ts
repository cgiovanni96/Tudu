import { IsIn } from 'class-validator'
import { Field, InputType } from 'type-graphql'
import { StatusArray } from '../../../database/schema/StatusEnum'

@InputType()
export default class AddStatusInputType {
	@Field({ nullable: false })
	@IsIn([...StatusArray])
	name: string
}
