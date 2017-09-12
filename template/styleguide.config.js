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
          name: 'Use Case 1',
          content: 'docs/UseCase1.md'
        },
        /* One item for every different demo or doc of the component */
        {
          name: 'Use Case 2',
          content: 'docs/UseCase2.md'
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
