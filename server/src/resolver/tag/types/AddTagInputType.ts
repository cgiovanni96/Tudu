import { Field, InputType } from 'type-graphql'

@InputType()
export default class AddTagInputType {
	@Field({ nullable: false })
	name: string

	@Field({ nullable: true })
	color?: string
}
