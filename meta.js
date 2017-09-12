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
    let msg = "To get started:";
    if (data.inPlace) msg.concat("\n\ncd " + data.destDirName);
    msg.concat("\n\n1. Install dependencies npm install");
    msg.concat("\n2. Write your component in src/Component.vue");
    msg.concat("\n3. Write a demo in docs docs/Usage.md");
    msg.concat("\n4. Access demo and docs with npm run serve");
    msg.concat("\n5. Build with npm run build");
    msg.concat("\n6. Build docs with npm run build:doc");
    logger.log(msg);
    // Rename to be compatible with styleguide configuration
    fs.renameSync('src/Component/Component.vue', 'src/Component/' + data.name + '.vue');
    fs.renameSync('src/Component/Component.md', 'src/Component/' + data.name + '.md');
    fs.renameSync('src/Component', 'src/' + data.name);
  }
};
