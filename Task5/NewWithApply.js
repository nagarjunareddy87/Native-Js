function construct(Class) {
    var args, newObject;
    args = Array.prototype.slice.call(arguments, 1);
    newObject = Object.create(Class.prototype);
    Class.apply(newObject, args);
    return newObject;
}