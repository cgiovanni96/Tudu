import theme from '../theme'

export const useGetStatus = (status = 'active'): string => {
	const statusLowerCase = status.toLowerCase()
	if (statusLowerCase === 'active') return theme.palette.status.active
	else if (statusLowerCase === 'planned') return theme.palette.status.planned
	else return theme.palette.status.completed
}
