
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    
    import LoginComponent from "./LoginComponent";
    
    storiesOf('LoginComponent', module)
    .addDecorator(story => <div style={{ padding: '1rem', border: '1px solid black' , backgroundColor:'whitesmoke' }}>{story()}</div>)
        .add('default', () =>  <LoginComponent /> )
 