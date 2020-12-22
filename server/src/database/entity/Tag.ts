import { Field, ID, ObjectType } from 'type-graphql'
import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm'

@Entity()
@ObjectType()
export default class Tag extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	@Field()
	id: string

	@Column()
	@Field()
	name: string

	@Column({ nullable: true })
	@Field({ nullable: true })
	color?: string

	@CreateDateColumn()
	@Field((type) => Date)
	createdAt: Date

	@UpdateDateColumn()
	@Field((type) => Date)
	updatedAt: Date
}
