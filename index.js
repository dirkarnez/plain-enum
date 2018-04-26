"use strict";

module.exports = function () {
  for (
    var _len = arguments.length, values = Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    values[_key] = arguments[_key];
  }

  var ret;
  (function(ret) {
    var i = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (
        var _iterator = values[Symbol.iterator](), _step;
        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
        _iteratorNormalCompletion = true
      ) {
        var value = _step.value;

        ret[(ret[value] = i++)] = value;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  })(ret || (ret = {}));
  return ret;
}