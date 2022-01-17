<div align="center">
  <img src="/assets/logo.jpg" width="700" />
  <p style="margin-top: 25px;"></p>

[![Build Status](https://app.travis-ci.com/drolsen/webpack-metrics.svg?branch=master)](https://app.travis-ci.com/drolsen/webpack-metrics)
[![Minimum node.js version](https://badgen.net/npm/node/webpack-metrics)](https://npmjs.com/package/webpack-metrics)
[![downloads](https://img.shields.io/npm/dm/webpack-metrics.svg?style=flat-square)](http://npm-stat.com/charts.html?package=webpack-metrics&from=2022-01-08)
[![version](https://img.shields.io/npm/v/webpack-metrics.svg?style=flat-square)](http://npm.im/webpack-metrics)
[![GitLab release](https://badgen.net/github/releases/drolsen/webpack-metrics)](https://github.com/drolsen/webpack-metrics/releases)
[![MIT License](https://img.shields.io/npm/l/webpack-metrics.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/drolsen/webpack-metrics/graphs/commit-activity)
</div>

### Why?


### How it works


---
### Install
```
npm i --save-dev webpack-metrics
```
```
yarn add --dev webpack-metrics
```

### Webpack Config
Import `webpack-metrics` into your Webpack configuration file:

```js
const WebpackMetrics = require('webpack-metrics');
```

Instantiate new `WebpackMetrics(...)` class within Webpack's plugin configuration array:
```js
{
  "plugins": [
    new WebpackMetrics()
  ]
}
```

---

## Options

```js
new WebpackMetrics({
  ...options...
})
```

Option | Types | Description | Default
--- | --- | --- | ---
`---` | --- | --- | ---



## options.files


```js
new WebpackMetrics({

})
```

---

### Tests

Webpack Metrics comes with a number of tests found under `/tests`.
These are here to help you better understand the expectations of each option we covered above.

Simply run `npm run test` or `yarn test` from the root of the plugin to run all tests. Running a test will produce a `/dist/[test]` directories.

If you would like to change a test, update the root package.json file's `test` script to use any of the `/test/*.test.config.js` files.
