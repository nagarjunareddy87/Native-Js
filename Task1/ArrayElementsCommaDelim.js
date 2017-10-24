//array.toString() by defalut gives us the elements with Comma delimiters
function printArray(array) {
	return array.toString();
}
(or)
//array.join() by defalut gives us the elements with Comma delimiters if we don't pass any paramters, it will also be used to print the elements with any other delimiters by passing the delimiter as parameter
function printArray(array) {
	return array.join();
}