import { StatusArray } from './../schema/StatusEnum'
import { define } from 'typeorm-seeding'
import Todo from '../entity/Todo'
import * as Faker from 'faker'
import writeLogs from '../../app/utils/writeLogs'
define(Todo, (faker: typeof Faker) => {
	const name = faker.hacker.phrase()
	const description = faker.lorem.paragraphs(2)
	const statusIdx = faker.random.number({ min: 0, max: 2 })
	const status = StatusArray[statusIdx]

	const todo: Todo = new Todo()
	todo.name = name
	todo.description = description
	todo.status = status

	writeLogs(
		'todo',
		`todo: ${todo.name}, description: ${todo.description}, status: ${todo.status} \n`
	)

	return todo
})
