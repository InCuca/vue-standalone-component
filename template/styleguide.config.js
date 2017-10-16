const loaders = require('vue-webpack-loaders');
const glob = require('glob').sync;
const basename = require('path').basename;

function getDocSections() {
  b = p => basename(p, '.md');
  return glob('docs/*.md')
  .filter(path => b(path)!=='Introduction')
  .map(path => ({
    name: b(path),
    content: path
  }));
}

/**
 * More info about this styleguide configuration in
 * vue-styleguidist/vue-styleguidist github repository
 */
module.exports = {
  sections: [
    {
      /* The component itself */
      name: 'test-cmp1',
      content: 'docs/Introduction.md',
      components: 'src/**/*.vue',
      // ignore: ['src/ignored-component/ignored-component.vue'],
      sections: getDocSections()
    },
  ],
  webpackConfig: {
    module: {
			loaders,
		}
  },
  serverPort: 6062
};
