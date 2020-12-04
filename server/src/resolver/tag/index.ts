import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import Tag from '../../database/entity/Tag'
import AddTagInputType from './types/AddTagInputType'

@Resolver()
export default class TagResolver {
	@Query(() => [Tag], { nullable: true })
	tags(): Promise<Tag[] | null> {
		try {
			return Tag.find()
		} catch {
			return null
		}
	}

	@Query(() => Tag, { nullable: true })
	tag(@Arg('name') name: string): Promise<Tag | null> {
		try {
			return Tag.findOne({ where: { name } })
		} catch {
			return null
		}
	}

	@Mutation(() => Tag, { nullable: true })
	async addTag(@Arg('data') newTagData: AddTagInputType): Promise<Tag | null> {
		try {
			const tag: Tag = await Tag.create({ ...newTagData })
			return tag.save()
		} catch {
			return null
		}
	}
}
