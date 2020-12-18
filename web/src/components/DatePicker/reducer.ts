import { OnDateChangeProps } from '@datepicker-react/styled'
import { State } from './DatePicker'

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

export default reducer
