[![Version npm](https://img.shields.io/npm/v/globat.svg?style=flat-square)](https://www.npmjs.com/package/globat)
[![MIT License][license-image]][license-url]

# 🦇 globat
Concatenate files in alphabetical order with glob pattern.

## INSTALL
```
yarn add globat
```

## USAGE
```js
const globat = require('globat')

globat('**/*.scss', (err, txt)=>{
  if (err) { return err }
  console.log(txt)
})

```

## AUTHOR
Hideyuki Hirauchi

## LICENSE
globat is freely distributable under the terms of the [MIT license][license-url].

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
