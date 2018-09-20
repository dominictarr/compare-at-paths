# compare-at-paths

create a compare function that compares given paths into an object.

## example

``` js
[
  {foo: true, bar: {baz: 1}},
  {foo: true, bar: {baz: 3}},
  {foo: true, bar: {baz: 2}},
  {foo: false, bar: {baz: 1}}
].sort(Compare([['bar', 'baz'], ['foo']]))
```
output will be
``` js
[
  {foo: false, bar: {baz: 1}},
  {foo: true, bar: {baz: 1}},
  {foo: true, bar: {baz: 2}},
  {foo: true, bar: {baz: 3}}
]
```

if you want a field to be in decending order, use `{$reverse: [path...]}`

## License

MIT



