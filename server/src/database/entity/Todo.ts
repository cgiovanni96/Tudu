import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm'
import { Field, ID, ObjectType } from 'type-graphql'
import { StatusEnum } from '../schema/StatusEnum'

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

	@Column({ type: 'enum', enum: StatusEnum, default: StatusEnum.active })
	@Field()
	status: string

	@CreateDateColumn()
	@Field()
	createdAt: Date

	@UpdateDateColumn()
	@Field()
	updatedAt: Date
}
