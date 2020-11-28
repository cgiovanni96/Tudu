import { Field, ID, ObjectType } from 'type-graphql'
import {
	BaseEntity,
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn
} from 'typeorm'
import { StatusEnum } from '../schema/StatusEnum'
import Todo from './Todo'

@Entity()
@ObjectType()
export default class Status extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	@Field(ID)
	id: string

	@Column('varchar', { default: StatusEnum.progress })
	@Field()
	name: string

	@OneToMany(() => Todo, (todo) => todo.status)
	@Field((type) => [Todo])
	todos: Todo[]
}
