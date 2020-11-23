import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Field, ID, ObjectType } from 'type-graphql'

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

	@Column('date', { default: new Date() })
	@Field()
	createdAt: Date

	@Column('date', { default: new Date() })
	@Field()
	updatedAt: Date
}
