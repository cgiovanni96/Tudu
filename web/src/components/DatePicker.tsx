import React, { useReducer } from 'react'
import { DateSingleInput, OnDateChangeProps } from '@datepicker-react/styled'
import { ThemeProvider } from 'styled-components'

interface State {
	date: Date | null
	showDatePicker: boolean
}

const initialState: State = {
	date: null,
	showDatePicker: false
}

type Action =
	| { type: 'focusChange'; showDatePicker: boolean }
	| { type: 'dateChange'; date: OnDateChangeProps }

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'focusChange':
			return { ...state, showDatePicker: action.showDatePicker }
		case 'dateChange':
			return { ...state, date: action.date.date }
		default:
			throw new Error()
	}
}

const DatePicker: React.FC = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<DateSingleInput
			onDateChange={(data) => dispatch({ type: 'dateChange', date: data })}
			onFocusChange={(focusedInput) =>
				dispatch({ type: 'focusChange', showDatePicker: focusedInput })
			}
			date={state.date}
			showDatepicker={state.showDatePicker}
			showClose={false}
			showResetDate={false}
		/>
	)
}

export default DatePicker
