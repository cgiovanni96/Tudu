import React, { useReducer } from 'react'
import { DateSingleInput } from '@datepicker-react/styled'
import reducer from './reducer'

export interface State {
	date: Date | null
	showDatePicker: boolean
}

const initialState: State = {
	date: null,
	showDatePicker: false
}

interface DatePickerProps {
	setDate: React.Dispatch<React.SetStateAction<Date | null>>
}

const DatePicker: React.FC<DatePickerProps> = ({ setDate }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<DateSingleInput
			onDateChange={(data) => {
				setDate(data.date)
				return dispatch({ type: 'dateChange', date: data })
			}}
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
