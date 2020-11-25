import 'styled-components'

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
			title: string
			detail: string
		}
	}
}
