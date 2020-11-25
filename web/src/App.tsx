import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import GlobalStyles from './theme/GlobalStyles'
import Todos from './Todos'

const client = new ApolloClient({
	uri: 'http://localhost:3500/graphql',
	cache: new InMemoryCache()
})

const App: React.FC = () => {
	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Todos />
			</ThemeProvider>
		</ApolloProvider>
	)
}

export default App
