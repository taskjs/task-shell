# task-shell
> Execute unix shell commands with shelljs.

## The "shell" task

### Usage Examples

```js
var shell = new (require('task-shell'))
shell.run(inputs, options, logger)
```

### Options

#### options.command
Type: `string`

Unix shell command like `cp -R stuff/* out/`.

## Release History
* 2014-04-08    0.1.0    Initial release.

## License
Copyright (c) 2014 Yuanyan Cao. Licensed under the MIT license.
