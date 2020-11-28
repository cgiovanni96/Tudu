import {
	BaseEntity,
	Column,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn
} from 'typeorm'
import { Field, ID, ObjectType } from 'type-graphql'
import Status from './Status'

@ObjectType()
@Entity()
export default class Todo extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	@Field(ID)
	id!: string

	@Column('text')
	@Field()
	name: string

	@Column('text')
	@Field()
	description: string

	@Column('date', { default: new Date(0) })
	@Field()
	dueDate: Date

	@ManyToOne(() => Status, (status) => status.todos)
	@Field((type) => Status)
	status: Status

	@Column('date', { default: new Date() })
	@Field()
	createdAt: Date

	@Column('date', { default: new Date() })
	@Field()
	updatedAt: Date
}
