function basicOp(operation, value1, value2) {
	var result = {
		'+': (value1 + value2),
		'-': (value1 - value2),
		'*': (value1 * value2),
		'/': (value1 / value2)
	};
	return result[operation];
}