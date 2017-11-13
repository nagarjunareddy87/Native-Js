function compose(func1, func2) {
    return function (val) {
        return func1(func2(val));
    }
}