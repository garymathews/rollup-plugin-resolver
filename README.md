# rollup-plugin-resolver

Resolve imports with content from memory.

## Usage
### Example 1
```js
// src/main.js
import foo from 'foo';

console.log(foo);
```

```js
import resolver from 'rollup-plugin-resolver';

export default {
  imput: 'src/main.js',
  // ...
  plugins: [
    resolver({
      'foo': 'export default \'bar\''
    })
  ]
};
```
```
bar
```

### Example 2
```js
// src/main.js
import foo from 'foo';

console.log(foo);
```

```js
import resolver from 'rollup-plugin-resolver';

export default {
  imput: {
  	'src/main.js': 'console.log(\'foo\')'
  }
  // ...
  plugins: [
    resolver()
  ]
};
```
```
foo
```

## License

[MIT](LICENSE)