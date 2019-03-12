var path = require('path'),
fs = require('fs'),
ensureDirectoryExistence = require("./ensureDirectoryExistence");

var createComponentStories = require("./createComponentStories/createComponentStories")


const createComponent = (list) => {

    let names = [...new Set(list.map(item=>item.name))];
    let markups = list.map(item=>item.markup);
    let componentName = "RegistrationComponent";

    let elementImportPaths = names.map(element => `import ${element} from '../${element}/${element}.js';`).join("\n");
    let elementsJSX = markups.join("<br/>\n");

    const fileTemplate = `
import React from 'react';
${elementImportPaths}


class ${componentName} extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            ${elementsJSX}
            </div>
            )
    }
}

export default ${componentName};
 `

    let file=path.join(process.cwd(),`src/components/${componentName}/${componentName}.js`);
    ensureDirectoryExistence(file);
    fs.writeFileSync(file, fileTemplate);
    console.log("component file created");
    createComponentStories(componentName);
    console.log("component.stories.js file created")
}


module.exports = createComponent;