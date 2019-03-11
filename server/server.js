// Libraries.

const express = require('express')
var bodyParser = require("body-parser");

// Dependencies.

const createComponent = require("./createComponent.js");
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.post('/createComponent', (req, res) => {
    
    let data = req.body;
    console.log("Element", data.element);
    console.log("Markup", data.markup);
    console.log("full", JSON.stringify(req.body));
    createComponent(data);
    res.send('Hello World!')
})
 