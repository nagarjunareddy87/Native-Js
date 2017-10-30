function prefill(n, v) {
  try {
    var arr = Array.apply(null, Array(+n)).map(function () {
      return v;
    });
    return arr;
  } catch (e) {
    throw new TypeError(n + ' is invalid');
  }
}