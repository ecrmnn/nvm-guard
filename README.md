# nvm-guard
> Enforce correct .nvmrc version when running npm scripts

[![npm version](https://img.shields.io/npm/v/nvm-guard.svg?style=flat-square)](http://badge.fury.io/js/nvm-guard)
[![npm downloads](https://img.shields.io/npm/dm/nvm-guard.svg?style=flat-square)](http://badge.fury.io/js/nvm-guard)
[![npm license](https://img.shields.io/npm/l/nvm-guard.svg?style=flat-square)](http://badge.fury.io/js/nvm-guard)
[![eslint](https://img.shields.io/badge/code_style-airbnb-blue.svg?style=flat-square)](https://github.com/airbnb/javascript)

### Installation
```bash
npm install nvm-guard --save-dev
```

### Why?
`nvm-guard` protects your npm scripts for being ran with wrong Node.js version.
Make sure that all contributors are using the specified version and avoid unnecessary dependency hassle.

<img src="https://raw.githubusercontent.com/ecrmnn/nvm-guard/master/example.gif" width="100%" alt="nvm-guard">

### Usage
In your `package.json` add `nvm-guard` as a pre-hook or before the scripts you want to protect.
```javascript
{
  "scripts": {
    // When running npm run eslint, we'll first call nvm-guard, then ESLint if nvm-guard passes
    "eslint": "nvm-guard && eslint src/",

    // Will be called before npm test
    // npm docs: https://docs.npmjs.com/misc/scripts
    "pretest": "nvm-guard",

    // Will be called before npm install
    // npm docs: https://docs.npmjs.com/misc/scripts
    "preinstall": "nvm-guard"
  }
}
```

### Related
- [compatible-version](https://github.com/ecrmnn/compatible-version) - API for this module

### License
MIT © [Daniel Eckermann](http://danieleckermann.com)