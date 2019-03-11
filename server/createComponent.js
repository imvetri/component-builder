var path = require('path'),
fs = require('fs'),
ensureDirectoryExistence = require("./ensureDirectoryExistence");


const createComponent = (list) => {

    let names = list.map(item=>item.name);
    let markups = list.map(item=>item.markup);
    let componentName = "RegistrationComponent";

    let elementImportPaths = names.map(element => `import ${element} from 'src/components/${element}/${element}.js';`).join("\n");
    let elementsJSX = markups.join("\n");

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
    ensureDirectoryExistence(file)
    fs.writeFileSync(file, fileTemplate)
}


module.exports = createComponent;