const loaders = require('vue-webpack-loaders');

module.exports = {
  sections: [
    {
      /* The component itself */
      name: '{{ name }}',
      content: 'docs/Introduction.md',
      components: 'src/Component/Component.vue',
      ignore: ['src/Component/Component.vue'],
      sections: [
        /* One item for every different demo or doc of the component */
        {
          name: 'usage',
          content: 'docs/Usage.md'
        }
      ]
    },
  ],
  webpackConfig: {
    module: {
			loaders,
		}
  },
  serverPort: 6062
};
