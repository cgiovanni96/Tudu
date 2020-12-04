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
		this.descriptionSnippet = truncate(this.description, 15, true)
	}

	@BeforeUpdate()
	slugifyTitleOnUpdate() {
		this.slug = slugify(this.name)
		this.descriptionSnippet = truncate(this.description, 15, true)
	}
}
