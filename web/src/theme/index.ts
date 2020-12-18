import { DefaultTheme } from 'styled-components/'

import components from './component'

const theme: DefaultTheme = {
	palette: {
		bg: '#24292E',
		accent: {
			dark: '#1B1D23',
			medium: '#20242A',
			light: '#2C313A'
		},
		text: {
			primary: '#D6D8DA',
			secondary: '#8795A3'
		},
		tone: {
			primary: '#F9826C',
			secondary: '#7371E2'
		},
		status: {
			active: '#37BB74',
			planned: '#E0D24E',
			completed: '#E3466C'
		}
	},
	typo: {
		family: "'Poppins', sans-serif;",
		size: {
			title: '48px',
			big: '24px',
			medium: '16px',
			small: '12px'
		},
		weight: {
			bold: 700,
			regular: 400
		}
	},

	reactDatepicker: components.reactDatepicker
}

export default theme
