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

<img src="https://raw.githubusercontent.com/ecrmnn/nvm-guard/master/example.gif" alt="nvm-guard">

### Usage
#### Default npm `pre`-hooks
In your `package.json` add `nvm-guard` as a pre-hook for all scripts you want to enforce correct Node.js version
```javascript
{
  "scripts": {
    // Will be called before npm test
    "pretest": "nvm-guard",

    // Will be called before npm install
    "preinstall": "nvm-guard",
  }
}
```

#### Custom npm scripts
You can use `nvm-guard` with custom npm scripts too.
```javascript
{
  "scripts": {
    // When running npm run eslint, we'll first call nvm-guard, then ESLint
    "eslint": "nvm-guard && eslint src/",
  }
}
```

### Related
- [compatible-version](https://github.com/ecrmnn/compatible-version) - API for this module

### License
MIT © [Daniel Eckermann](http://danieleckermann.com)