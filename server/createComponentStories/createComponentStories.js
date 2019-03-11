var path = require('path'),
fs = require('fs'),
ensureDirectoryExistence = require("../ensureDirectoryExistence");

const createComponentStories = (componentName) => {

    const fileTemplate = `
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    
    import ${componentName} from "./${componentName}";
    
    storiesOf('${componentName}', module)
        .add('default', () =>  <${componentName} /> )
 `

    let file=path.join(process.cwd(),`src/components/${componentName}/${componentName}.stories.js`)
    ensureDirectoryExistence(file)
    fs.writeFileSync(file, fileTemplate)
}


module.exports = createComponentStories;