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
    // Rename to be compatible with styleguide configuration
    fs.renameSync('src/Component/Component.vue', 'src/Component/' + data.name + '.vue');
    fs.renameSync('src/Component/Component.md', 'src/Component/' + data.name + '.md');
    fs.renameSync('src/Component', 'src/' + data.name);

    logger.log("To get started:");
    if (data.inPlace) logger.log("cd " + data.destDirName);
    logger.log("1. Install dependencies npm install");
    logger.log("2. Write your component in src/Component.vue");
    logger.log("3. Write a demo in docs docs/Usage.md");
    logger.log("4. Access demo and docs with npm run serve");
    logger.log("5. Build with npm run build");
    logger.log("6. Build docs with npm run build:doc");
  }
};
