const {name, version} = require('./package.json')
const loaders = require('vue-webpack-loaders');

module.exports = {
  components: 'src/**/[A-Z]*.vue',
  webpackConfig: {
    module: {
			loaders,
		},
    plugins: [
      new webpack.DefinePlugin({
        'proccess.env.VERSION': JSON.stringify(version) // adds MyComponent.version
      })
    ]
  },
  serverPort: 6062
};
