const presetKarma = require('poi-preset-karma');
const webpack = require('webpack');
const glob = require('glob').sync;
const {name} = require('./package.json');

// converts my-component to MyComponent
function camelCase (s) {
  return s.replace(/([\-_\s]+[a-z])|(^[a-z])/g, $1 => $1.toUpperCase())
          .replace(/[\-_\s]+/g, '')
}

module.exports = {
  entry: glob('./src/**/*.vue'),
  filename: {
    js: name + '.min.js',
  },
  sourceMap: true,
  html: false,
  presets: [
    presetKarma({
      files: ['./test/specs/**.spec.js'],
      browsers: ['PhantomJS'],
      frameworks: ['mocha', 'chai', 'phantomjs-shim'],
    })
  ],
  moduleName: camelCase({{ name }})
};
