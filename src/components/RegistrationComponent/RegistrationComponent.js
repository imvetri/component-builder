
import React from 'react';
import Input from '../Input/Input.js';
import Button from '../Button/Button.js';


class RegistrationComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <Input input={{id: '1',value: 'Username'}} onInputFocus={''} />
<br/>
<Input input={{id: '1',value: 'Password'}} onInputFocus={''} />
<br/>
<Button button={{id: '1',name: 'Signin'}} onButtonClick={''} />
<br/>
<Button button={{id: '1',name: 'Cancel'}} onButtonClick={''} />

            </div>
            )
    }
}

export default RegistrationComponent;
 