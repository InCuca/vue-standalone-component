const presetKarma = require('poi-preset-karma');
const glob = require('glob').sync;
const {name} = require('./package.json');

module.exports = {
  entry: glob('./src/**/*.vue'),
  filename: {
    js: name + '.min.js',
  },
  sourceMap: false,
  html: false,
  presets: [
    presetKarma({
      files: ['test/specs/**/*.spec.js'],
      browsers: ['PhantomJS'],
      frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
      coverage: true
    })
  ]
};
