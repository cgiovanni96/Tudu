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
				active: string
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

		reactDatepicker: {
			daySize: Array<number>
			fontFamily: string
			colors: {
				accessibility: string
				selectedDay: string
				selectedDayHover: string
				primaryColor: string
			}
			dayLabelColor: string
			inputColor: string
			datepickerBackground: string
			dayBackground: string
			dayBorderColor: string
			inputBackground: string
			inputLabelBorder: string
			navButtonBackground: string
			navButtonBorder: string
		}
	}
}
