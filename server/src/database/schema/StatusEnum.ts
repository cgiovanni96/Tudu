import { validate } from 'graphql'
import { registerEnumType } from 'type-graphql'

export enum StatusEnum {
	progress = 'In Progress',
	planned = 'Planned',
	completed = 'Completed'
}

export const StatusArray = [
	StatusEnum.progress,
	StatusEnum.planned,
	StatusEnum.completed
]

registerEnumType(StatusEnum, {
	name: 'StatusValues',
	description: 'The possible values for the status of a todo'
})
