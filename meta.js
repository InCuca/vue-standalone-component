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
      "default": "A Vue.js component module"
    },
    "author": {
      "type": "string",
      "label": "Author"
    }
  },
  "helpers": {
    camelcase: function(str) {
      return str.replace(/([\-_\s]+[a-z])|(^[a-z])/g, $1 => $1.toUpperCase())
              .replace(/[\-_\s]+/g, '')
    }
  },
  "complete": function(data, {logger}) {
    // Rename to be compatible with styleguide configuration
    const cmpDir = data.inPlace?'src/Component':path.resolve(data.destDirName, 'src/Component');
    const testDir = data.inPlace?'test':path.resolve(data.destDirName, 'test');
    fs.renameSync(
      path.resolve(cmpDir, 'Component.vue'),
      path.resolve(cmpDir, data.name + '.vue')
    );
    fs.renameSync(
      path.resolve(cmpDir, 'Component.md'),
      path.resolve(cmpDir, data.name + '.md')
    );
    fs.renameSync(
      cmpDir,
      path.resolve(cmpDir, '../', data.name)
    );
    fs.renameSync(
      path.resolve(testDir, 'specs/Component.spec.js'),
      path.resolve(testDir, 'specs/' + data.name + '.spec.js')
    );

    logger.log("To get started:");
    if (!data.inPlace) logger.log("cd " + data.destDirName);

    const logFiles = {
      component: path.relative(
        data.destDirName,
        path.resolve(data.destDirName, 'src', data.name, data.name + '.vue')
      ),
      componentDoc: path.relative(
        data.destDirName,
        path.resolve(data.destDirName, 'src', data.name, data.name + '.md')
      ),
      usage: path.relative(
        data.destDirName,
        path.resolve(data.destDirName, 'docs/*.md')
      )
    }
    logger.log("1. Install dependencies: npm install");
    logger.log("2. Write your component in " + logFiles.component);
    logger.log(
      "3. Write the component doc in " +
      logFiles.componentDoc +
      ' or in the component itself using jsdoc'
    );
    logger.log("4. Write the demo and usage instructions in " + logFiles.usage);
    logger.log("5. Access demo and docs with npm run serve");
    logger.log("6. Build with: npm run build");
    logger.log("7. Build docs with: npm run build:doc");
  }
};
