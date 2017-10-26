const presetKarma = require('poi-preset-karma');
const webpack = require('webpack');
const glob = require('glob').sync;
const {name} = require('./package.json');

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
  moduleName: {{ camelcase name }}
};
