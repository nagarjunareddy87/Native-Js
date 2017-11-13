function cache(func) {
    var cache = {};

    return function () {
        var args = arguments, key = [].slice.call(args).join('');
        if (cache[key]) {
            console.log("from cache");
            return cache[key];
        } else {
            console.log("from non-cache");
            cache[key] = func.apply(this, args);
            return cache[key];
        }
    }
}