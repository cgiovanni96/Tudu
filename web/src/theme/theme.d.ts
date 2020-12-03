import 'styled-components'

interface Typo {
	family: string
	size: string
	weight: number
}

declare module 'styled-components' {
	export interface DefaultTheme {
		palette: {
			bg: string
			accent: {
				dark: string
				medium: string
				light: string
			}
			text: {
				primary: string
				secondary: string
			}
			tone: {
				primary: string
				secondary: string
			}
			status: {
				progress: string
				planned: string
				completed: string
			}
		}

		typo: {
			family: string
			size: {
				title: string
				big: string
				medium: string
				small: string
			}

			weight: {
				bold: number
				regular: number
			}
		}
	}
}
