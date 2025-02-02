const truncate = (str: string, n: number, useWordBoundary: boolean): string => {
	if (str.length <= n) {
		return str
	}
	const subString = str.substr(0, n - 1) // the original check
	return (
		(useWordBoundary
			? subString.substr(0, subString.lastIndexOf(' '))
			: subString) + '&hellip;'
	)
}

export default truncate
