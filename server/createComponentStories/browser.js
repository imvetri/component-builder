list = [];

function createUI(){
    var root = document.getElementById("root");
    var container = document.createElement("div");
    container.style.cssText = "position: fixed;z-index: 10000;"

    // Add button.
    addButton = getButton("Add");
    addButton.style.cssText = "font-family: sans-serif;font-size: 12px;display: block;position: fixed;border: none;background: rgb(34, 136, 204);color: rgb(255, 255, 255);padding: 5px 15px;cursor: pointer;top: 0px;right: 0px;border-radius: 0px 0px 0px 5px;"
    // Create button.
    createButton = getButton("Create");
    createButton.style.cssText = "font-family: sans-serif;font-size: 12px;display: block;position: fixed;border: none;background: rgb(34, 136, 204);color: rgb(255, 255, 255);padding: 5px 15px;cursor: pointer;top: 0px;right: 100px;border-radius: 0px 0px 0px 5px;"

    // Bind events.
    createButton.addEventListener("click",createElement )
    addButton.addEventListener("click", addElements);
    container.append(addButton);
    container.append(createButton);
    root.append(container);
}

function getButton(id){
    var addButton = document.createElement("button");
    addButton.id=id;
    addButton.innerText=id;
    return addButton;
}

function addElements(){
    var storybookPreviewIframe = document.querySelector("#storybook-preview-iframe");
    var markup = storybookPreviewIframe.contentWindow.document.getSelection().toString();
    var name = markup.split("<")[1].split(" ")[0];
    var data = {
      name: name,
      markup: markup.replace("{action}","{''}")
    }
    list.push(data);
}

function createElement(){
  
  fetch('http://localhost:3001/createComponent', {
      method: 'post',
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(dummy) })
}

createUI();


var dummy = [

  {
    "name": "Input",
    "markup": "<Input input={{id: '1',value: 'Enter email'}} />\n"
  },

  {
    "name": "Input",
    "markup": "<Input input={{id: '1',value: 'Enter password'}} />\n"
  },
  
  {
    "name": "Button",
    "markup": "<Button button={{id: '1',name: 'Sign in'}} />\n"
  },
  {
    "name": "Button",
    "markup": "<Button button={{id: '1',name: 'Forgot Password'}} />\n"
  }
]