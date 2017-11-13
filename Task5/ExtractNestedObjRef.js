Object.prototype.hash = function (param) {
    var result = param.split('.'), refToThis = this;
    for (var i = 0; i < result.length; i++) {
        refToThis = refToThis ? refToThis[result[i]] : undefined;
    }
    return refToThis;
}