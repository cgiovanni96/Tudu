import React from 'react'
import styled from 'styled-components'

import { TagFieldsFragment } from '../../generated/graphql'

interface TagListProps {
	tags?: TagFieldsFragment[]
}

const TagList: React.FC<TagListProps> = ({ tags }) => {
	return (
		<Base>
			{tags &&
				tags.map(({ ID, name, color }) => {
					return (
						<Tag key={ID} color={color || undefined}>
							{' '}
							{name}{' '}
						</Tag>
					)
				})}
		</Base>
	)
}

export default TagList

const Base = styled.ul`
	flex: 1;
	display: flex;
	margin-left: 2em;
	font-size: ${({ theme }) => theme.typo.size.small};
`

interface TagProps {
	color?: string
}

const Tag = styled.li<TagProps>`
	margin-right: 1em;
	padding: 5px 10px;
	border-radius: 8px;
	border: 1px solid
		${(props) => (props.color ? props.color : props.theme.palette.accent.light)};
	color: ${(props) =>
		props.color ? props.color : props.theme.palette.accent.light};
	cursor: pointer;
`
