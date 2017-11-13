var Cat = (function () {
  var sum = 0, count = 0;
  function Cat(name, weight) {
    sum = sum + weight;
    count = count + 1;
    var _name = name, _weight = weight;
    Object.defineProperty(this, "name", {
      get: function () {
        return _name;
      }
    });
    Object.defineProperty(this, "weight", {
      get: function () {
        return _weight;
      },
      set: function (value) {
        sum = (sum - weight) + value;
        _weight = value;
      }
    });
  }
  Cat.averageWeight = function () {
    return (sum / count);
  };
  return Cat;
}());