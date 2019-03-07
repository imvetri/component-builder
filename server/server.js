// Libraries.

const express = require('express')

// Dependencies.

const createComponent = require("./createComponent.js");

const app = express()
const port = 3001
 
app.get('/', (req, res) => res.send('Hello World!'))
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

 
// Whenever 3001 s hit, this program has to
/*
    localhost:3001/createComponent?name="input",name="text"
*/
app.get('/createComponent', (req, res) => {
    
    let elements = req.query.name.split(",");
    let componentName
    createComponent(elements, componentName);
    res.send('Hello World!')
})
 