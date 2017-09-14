const fs = require('fs');
const path = require('path');

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
    const cmpDir = path.resolve(data.destDirName, 'src/Component');
    fs.renameSync(
      path.resolve(cmpDir, 'Component.vue'),
      path.resolve(cmpDir, data.name + '.vue')
    );
    fs.renameSync(
      path.resolve(cmpDir, 'Component.md'),
      path.resolve(cmpDir, data.name + '.md')
    );
    fs.renameSync(
      path.resolve(cmpDir, 'src/' + data.name)
    );

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
