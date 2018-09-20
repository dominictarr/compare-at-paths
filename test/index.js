var Compare = require('..')
var nested = require('libnested')
var tape = require('tape')
var typewise = require('typewiselite')

function random () {
  return {
    foo: Math.random(),
    bar: Math.random() > 0.5,
    baz: [{integer: ~~(Math.random() * 10), number: true},
      {float: Math.random()*Math.pow(2, 32), number: true},
      {boolean: Math.random() > 0.5, number: false}
    ][~~(Math.random()*3)]
  }
}

tape('simple', function (t) {

  var a = []
  for(var i = 0; i < 10; i++)
    a.push(random())

  var paths = [['baz', 'number'],['bar'], ['foo']]

  function toValues(paths) {
    return function (v) {
      return paths.map(function (p) {
        return nested.get(v, p)
      })
    }
  }

  var b = a.slice().sort(Compare(paths))
  console.log(a.map(toValues(paths)).sort(typewise))

  console.log(b)

  t.deepEqual(
    b.map(toValues(paths)),
    a.map(toValues(paths)).sort(typewise)
  )
  t.end()
})
