import { StatusArray } from './../schema/StatusEnum'
import { define } from 'typeorm-seeding'
import Todo from '../entity/Todo'
import * as Faker from 'faker'
import writeLogs from '../../app/utils/writeLogs'
import Tag from '../entity/Tag'

let TagArray: Tag[] = []

define(Tag, (faker: typeof Faker) => {
	const name = faker.lorem.word(1)
	const color = faker.internet.color()

	const tag: Tag = new Tag()
	tag.name = name
	tag.color = color

	TagArray.push(tag)

	writeLogs('tag', `\ntag: ${tag.name},\ncolor: ${tag.color} \n\n`)

	return tag
})

define(Todo, (faker: typeof Faker) => {
	const name = faker.hacker.phrase()
	const description = faker.lorem.paragraphs(2)

	//status
	const statusIdx = faker.random.number({ min: 0, max: 2 })
	const status = StatusArray[statusIdx]

	//tags
	const tagIdx = faker.random.number({ min: 0, max: TagArray.length - 1 })
	const tag = TagArray[tagIdx]

	const todo: Todo = new Todo()
	todo.name = name
	todo.description = description
	todo.status = status
	todo.tags = [tag]

	writeLogs(
		'todo',
		`todo: \n${todo.name},\ndescription: ${todo.description},\nstatus: ${todo.status},\ntag: ${todo.tags[0].name} \n\n`
	)

	return todo
})
