import { ApolloClient, InMemoryCache } from '@apollo/client'

export const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				todos: {
					keyArgs: []
				}
			}
		}
	}
})

export const client = new ApolloClient({
	uri: 'http://localhost:8080/graphql',
	cache
})
