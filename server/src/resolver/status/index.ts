import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import Status from '../../database/entity/Status'
import AddStatusInputType from './types/AddStatusInputType'

@Resolver()
export default class StatusResolver {
	@Query(() => [Status])
	async status(): Promise<Status[]> {
		try {
			const allStatus = await Status.find()
			return allStatus
		} catch {
			throw new Error('No status')
		}
	}

	@Mutation(() => Status)
	async addStatus(@Arg('data') { name }: AddStatusInputType): Promise<Status> {
		try {
			const status = await Status.create({ name })
			return status.save()
		} catch {
			throw 'Something went wrong'
		}
	}
}
