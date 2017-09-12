const webpack = require.main.require('webpack')
const {name, version} = require('./package.json')

module.exports = {
  webpack: {
    devtool: false, // disable source-map
    plugins: [
      new webpack.DefinePlugin({
        'proccess.env.VERSION': JSON.stringify(version) // adds MyComponent.version
      })
    ]
  }
}
