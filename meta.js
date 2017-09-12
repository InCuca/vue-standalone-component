const fs = require('fs');

module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "label": "Component name in kebab-case format",
      "default": "v-awesome-component"
    },
    "description": {
      "type": "string",
      "required": true,
      "label": "Project description",
      "default": "A Vue.js component"
    },
    "author": {
      "type": "string",
      "label": "Author"
    }
  },
  "complete": function(data, {logger}) {
    logger.log("To get started:\n\n{{^inPlace}}cd {{destDirName}}\n\n \
    {{/inPlace}}1. Install dependencies npm install\n2. Write your component \
    in src/Component.vue\n3. Write a demo in docs docs/Usage.md\n4. Access \
    demo and docs with npm run serve\n5. Build with npm run build\n6. Build \
    docs with npm run build:doc");
    const name = require(data.destDirName + '/package.json').name;
    console.log(this, data, name);
    fs.renameSync('src/Component.vue', 'src/' + name + '.vue');
  }
};
