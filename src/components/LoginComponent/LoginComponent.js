
import React from 'react';
import Input from '../Input/Input.js';
import Button from '../Button/Button.js';


class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <Input input={{id: '1',value: 'Username'}} />
<br/>
<Input input={{id: '1',value: 'Password'}}  />
<br/>
<Button button={{id: '1',name: 'Signin'}} />
<br/>
<Button button={{id: '1',name: 'Cancel'}} />

            </div>
            )
    }
}

export default LoginComponent;
 