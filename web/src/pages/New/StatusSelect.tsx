import React from 'react'
import Select, { StylesConfig } from 'react-select'
import { SelectOptions, selectOptions } from './selectOption'

const customStyles: StylesConfig = {
	option: (provided) => ({
		...provided,
		background: '#20242A'
	}),
	menu: (provided) => ({
		...provided,
		background: '#20242A',
		color: '#D6D8DA'
	}),
	control: (provided) => ({
		...provided,
		background: '#20242A',
		border: 'none',
		color: '#D6D8DA',
		width: '200px'
	}),
	placeholder: (provided) => ({
		...provided,
		color: '#D6D8DA'
	}),

	singleValue: (provided) => ({
		...provided,
		color: '#D6D8DA'
	})
}

interface StatusSelectProps {
	setSelectedStatus: React.Dispatch<React.SetStateAction<SelectOptions>>
}

const StatusSelect: React.FC<StatusSelectProps> = ({ setSelectedStatus }) => (
	<Select
		options={selectOptions}
		styles={customStyles}
		defaultValue={selectOptions[0]}
		onChange={(option) => {
			if (option) setSelectedStatus(option)
		}}
	/>
)

export default StatusSelect
