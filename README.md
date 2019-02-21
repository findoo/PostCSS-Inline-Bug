*Issue*

- `yarn install`
- `yarn rollup:bug`

The css output in the bundle isn't valid:

```javascript
var css = ".inline {\n    color: red;\n}";
var style = {"inline-left":"inline","inline-right":"inline"};
styleInject(css);

console.log(style);
```


Can also run `yarn rollup` to get the valid output:

```javascript
var css = ".inline {\n    color: red;\n}";
var style = {"inline":"inline"};
styleInject(css);

console.log(style);
```