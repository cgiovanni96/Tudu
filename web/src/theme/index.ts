import { DefaultTheme } from 'styled-components/'

const theme: DefaultTheme = {
	color: {
		primary: '#08A6FF',
		background: '#FCFCFC',
		form: '#E7E7E7',
		text: {
			primary: '#333333',
			secondary: '#585858'
		}
	},

	typo: {
		title: {
			family: "'Raleway', sans-serif",
			size: '4rem',
			weight: 700
		},
		detail: {
			family: "'Montserrat', sans-serif",
			size: '1.5rem',
			weight: 600
		}
	},

	shadow: {
		accent: '0 4px 4px rgba(8,166,255, .35)'
	}
}

export default theme
