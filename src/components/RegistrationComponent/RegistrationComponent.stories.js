
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    
    import RegistrationComponent from "./RegistrationComponent";
    
    storiesOf('RegistrationComponent', module)
    .addDecorator(story => <div style={{ padding: '1rem', border: '1px solid black' , backgroundColor:'whitesmoke' }}>{story()}</div>)
        .add('default', () =>  <RegistrationComponent /> )
 