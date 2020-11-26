import 'styled-components'

interface Typo {
	family: string
	size: string
	weight: number
}

declare module 'styled-components' {
	export interface DefaultTheme {
		color: {
			primary: string
			background: string
			form: string
			text: {
				primary: string
				secondary: string
			}
		}

		typo: {
			title: Typo
			detail: Typo
		}
	}
}
