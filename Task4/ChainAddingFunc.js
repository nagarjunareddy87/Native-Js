function add(num1) {
    var result = function (num2) {
        return add(num1 + num2);
    };

    result.toString = function () {
        return num1;
    };

    return result;
}