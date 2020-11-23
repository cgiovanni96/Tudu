import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
@Entity()
export default class Todo extends BaseEntity {
	@PrimaryGeneratedColumn({ type: 'uuid' })
	@Field()
	id: string

	@Column('text')
	@Field()
	name: string

	@Column('text')
	@Field()
	description: string

	@Column('date')
	@Field()
	dueDate: Date

	@Column('date', { default: new Date() })
	@Field()
	createdAt: Date

	@Column('date', { default: new Date() })
	@Field()
	updatedAt: Date
}
