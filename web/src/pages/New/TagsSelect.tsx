import React from 'react'
import chroma from 'chroma-js'
import Select, { StylesConfig } from 'react-select'

import { useGetAllTagsQuery } from '../../generated/graphql'

export interface TagOptions {
	value: string
	label: string
	color: string | null | undefined
}

const colourStyles: StylesConfig = {
	control: (styles) => ({
		...styles,
		backgroundColor: '#20242A',
		border: 'none'
	}),
	option: (styles, { data, isDisabled, isFocused, isSelected }) => {
		const color = chroma(data.color)
		return {
			...styles,
			backgroundColor: isDisabled
				? null
				: isSelected
				? data.color
				: isFocused
				? color.alpha(0.3).css()
				: null,
			color: isDisabled
				? '#20242A'
				: isSelected
				? chroma.contrast(color, '#20242A') > 2
					? 'black'
					: 'white'
				: data.color,
			cursor: isDisabled ? 'not-allowed' : 'default'
		}
	},

	menu: (styles) => ({
		...styles,
		backgroundColor: '#2C313A'
	}),

	multiValue: (styles, { data }) => {
		const color = chroma(data.color)
		return {
			...styles,
			backgroundColor: color.alpha(0.1).css()
		}
	},

	multiValueLabel: (styles, { data }) => ({
		...styles,
		color: data.color
	})
}

interface TagSelectProps {
	setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>
}

const TagSelect: React.FC<TagSelectProps> = ({ setSelectedTags }) => {
	const { loading, error, data } = useGetAllTagsQuery()

	if (loading) return <div>Loading</div>
	if (error) return <div>Error</div>
	if (!data || !data.tags) return <div>Error</div>
	const tagsOptions: TagOptions[] = data.tags.map((tag) => {
		return { value: tag.ID, label: tag.name, color: tag.color }
	})

	return (
		<Select
			closeMenuOnScroll={false}
			isMulti
			options={tagsOptions}
			styles={colourStyles}
			onChange={(e) => {
				if (e) {
					const selected = e?.map((t) => {
						return t.value
					})
					setSelectedTags(selected)
				}
			}}
		/>
	)
}

export default TagSelect
