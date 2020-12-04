import { Factory, Seeder } from 'typeorm-seeding'
import Tag from '../entity/Tag'

export default class TagSeed implements Seeder {
	public async run(factory: Factory): Promise<void> {
		await factory(Tag)().createMany(10)
	}
}
