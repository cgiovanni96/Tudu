import {
	BaseEntity,
	BeforeInsert,
	BeforeUpdate,
	Column,
	CreateDateColumn,
	Entity,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm'
import { Field, ID, ObjectType } from 'type-graphql'
import { StatusEnum } from '../schema/StatusEnum'
import Tag from './Tag'
import slugify from '../../app/utils/slugify'
import truncate from '../../app/utils/truncateDescription'
import { v4 as uuidv4 } from 'uuid'

@ObjectType()
@Entity()
export default class Todo extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	@Field()
	id!: string

	@Column('text')
	@Field()
	name: string

	@Column('text')
	@Field()
	description: string

	@Column('timestamp', { default: new Date(0) })
	@Field(() => Date)
	dueDate: string

	@Column({ type: 'enum', enum: StatusEnum, default: StatusEnum.active })
	@Field()
	status: string

	@ManyToMany(() => Tag, { nullable: true })
	@JoinTable()
	@Field(() => [Tag], { nullable: true })
	tags?: Tag[]

	@CreateDateColumn()
	@Field()
	createdAt: Date

	@UpdateDateColumn()
	@Field()
	updatedAt: Date

	@Column()
	@Field()
	slug: string

	@Column()
	@Field()
	descriptionSnippet: string

	@BeforeInsert()
	slugifyTitleOnInsert() {
		this.slug = slugify(this.name)
		this.descriptionSnippet = truncate(this.description, 50, true)
	}

	@BeforeUpdate()
	slugifyTitleOnUpdate() {
		this.slug = slugify(this.name)
		this.descriptionSnippet = truncate(this.description, 50, true)
	}
}
