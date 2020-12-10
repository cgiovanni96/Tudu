import { ApolloProvider } from '@apollo/client'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './theme'
import GlobalStyles from './theme/GlobalStyles'
import Router from './Router'
import { client } from './utils/client'

const App: React.FC = () => {
	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Router />
			</ThemeProvider>
		</ApolloProvider>
	)
}

export default App
