export const getTodoType = (description: string, status: string): string => {
	if (isCompleted(status)) return 'completed'
	else if (!description) return 'small'
	else return 'normal'
}

export const isCompleted = (status: string): boolean => {
	if (status.toLowerCase() === 'completed') return true
	return false
}

export const showDescription = (status: string): boolean => {
	if (isCompleted(status)) return false
	return true
}
