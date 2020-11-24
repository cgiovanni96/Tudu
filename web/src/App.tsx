import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React from 'react'
import Todos from './Todos'

const client = new ApolloClient({
	uri: 'http://localhost:3500/graphql',
	cache: new InMemoryCache()
})

const App: React.FC = () => {
	return (
		<ApolloProvider client={client}>
			<Todos />
		</ApolloProvider>
	)
}

export default App
