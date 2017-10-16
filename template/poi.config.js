const glob = require('glob').sync;
const {name} = require('./package.json');

module.exports = {
  entry: glob('./src/**/*.vue'),
  filename: {
    js: name + '.min.js',
  },
  sourceMap: false,
  html: false
};
