var path = require('path'),
fs = require('fs'),
ensureDirectoryExistence = require("../ensureDirectoryExistence");

const createComponentStories = (elements, componentName, props) => {

    elements = elements.length==0 ? ["inputElement", "labelElement"] : elements;
    componentName = componentName ? componentName : "RegistrationComponent";


    let elementImportPaths = elements.map(element => "import " + element + " from 'src/elements/" + element + "';").join("\n");
    let elementsJSX = elements.map(element => "<" + element + "/>").join("\n            ");

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

    let file=path.join(process.cwd(),`src/components/${componentName}/${componentName}.js`)
    ensureDirectoryExistence(file)
    fs.writeFileSync(file, fileTemplate)
}


module.exports = createComponent;