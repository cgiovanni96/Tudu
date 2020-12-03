import { Factory, Seeder } from 'typeorm-seeding'
import Todo from '../entity/Todo'

export default class TodoSeeder implements Seeder {
	public async run(factory: Factory): Promise<void> {
		await factory(Todo)().seedMany(10)
	}
}
