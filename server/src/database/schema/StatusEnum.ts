import { registerEnumType } from 'type-graphql'

export enum StatusEnum {
	active = 'Active',
	planned = 'Planned',
	completed = 'Completed'
}

export const StatusArray = [
	StatusEnum.active,
	StatusEnum.planned,
	StatusEnum.completed
]

registerEnumType(StatusEnum, {
	name: 'StatusValues',
	description: 'The possible values for the status of a todo'
})
