var nested = require('libnested')
var compare = require('typewiselite')

function isObject (o) {
  return o && 'object' === typeof o && !Array.isArray(o)
}

module.exports = function createCompare (paths) {
  return function (a, b) {
    var r, reverse = 1
    for(var i = 0; i < paths.length; i++) {
      var path
      if(isObject(paths[i]) && paths[i].$reverse) {
        path = paths[i].$reverse
        reverse = -1
      }
      else
        path = paths[i]

      var _a = nested.get(a, path)
      var _b = nested.get(b, path)

      r = compare(_a, _b)
      console.log(_a, _b, r)
      if(r !== 0) return r * reverse
    }
    return r
  }
}

