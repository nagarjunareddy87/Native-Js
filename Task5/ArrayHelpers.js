Array.prototype.square = function () {
    return this.map(function (x) {
        return Math.pow(x, 2);
    });
}
Array.prototype.cube = function () {
    return this.map(function (x) {
        return Math.pow(x, 3);
    });
}
Array.prototype.sum = function () {
    return this.reduce(function (a, b) {
        return (a + b);
    });
}
Array.prototype.average = function () {
    return this.reduce(function (a, b) {
        return (a + b);
    }) / this.length;
}
Array.prototype.even = function () {
    return this.filter(function (x) {
        return (x % 2 == 0);
    }
    )
}
Array.prototype.odd = function () {
    return this.filter(function (x) {
        return (x % 2 == 1);
    }
    )
}