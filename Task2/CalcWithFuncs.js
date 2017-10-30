function zero(obj) {
	if (typeof obj != 'undefined') {
		var result = {
			'+': (0 + obj.val),
			'-': (0 - obj.val),
			'*': (0 * obj.val),
			'/': (0 / obj.val)
		};
		return (result[obj.op]);
	} else return 0;
}
function one(obj) {
	if (typeof obj != 'undefined') {
		var result = {
			'+': (1 + obj.val),
			'-': (1 - obj.val),
			'*': (1 * obj.val),
			'/': (1 / obj.val)
		};
		return (result[obj.op]);
	} else return 1;
}
function two(obj) {
	if (typeof obj != 'undefined') {
		var result = {
			'+': (2 + obj.val),
			'-': (2 - obj.val),
			'*': (2 * obj.val),
			'/': (2 / obj.val)
		};
		return (result[obj.op]);
	} else return 2;
}
function three(obj) {
	if (typeof obj != 'undefined') {
		var result = {
			'+': (3 + obj.val),
			'-': (3 - obj.val),
			'*': (3 * obj.val),
			'/': (3 / obj.val)
		};
		return (result[obj.op]);
	} else return 3;
}
function four(obj) {
	if (typeof obj != 'undefined') {
		var result = {
			'+': (4 + obj.val),
			'-': (4 - obj.val),
			'*': (4 * obj.val),
			'/': (4 / obj.val)
		};
		return (result[obj.op]);
	} else return 4;
}
function five(obj) {
	if (typeof obj != 'undefined') {
		var result = {
			'+': (5 + obj.val),
			'-': (5 - obj.val),
			'*': (5 * obj.val),
			'/': (5 / obj.val)
		};
		return (result[obj.op]);
	} else return 5;
}
function six(obj) {
	if (typeof obj != 'undefined') {
		var result = {
			'+': (6 + obj.val),
			'-': (6 - obj.val),
			'*': (6 * obj.val),
			'/': (6 / obj.val)
		};
		return (result[obj.op]);
	} else return 6;
}
function seven(obj) {
	if (typeof obj != 'undefined') {
		var result = {
			'+': (7 + obj.val),
			'-': (7 - obj.val),
			'*': (7 * obj.val),
			'/': (7 / obj.val)
		};
		return (result[obj.op]);
	} else return 7;
}
function eight(obj) {
	if (typeof obj != 'undefined') {
		var result = {
			'+': (8 + obj.val),
			'-': (8 - obj.val),
			'*': (8 * obj.val),
			'/': (8 / obj.val)
		};
		return (result[obj.op]);
	} else return 8;
}
function nine(obj) {
	if (typeof obj != 'undefined') {
		var result = {
			'+': (9 + obj.val),
			'-': (9 - obj.val),
			'*': (9 * obj.val),
			'/': (9 / obj.val)
		};
		return (result[obj.op]);
	} else return 9;
}

function plus(num) {
	return {
		'op': '+',
		'val': num
	};
}
function minus(num) {
	return {
		'op': '-',
		'val': num
	};
}
function times(num) {
	return {
		'op': '*',
		'val': num
	};
}
function dividedBy(num) {
	return {
		'op': '/',
		'val': num
	};
}