import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Stringify
elements = elements.map(element=> "import "+element + "from './" + element + ";")

// grab props from UI.
export const props = JSON.parse("{JSON.stringify(props)}")

storiesOf('Button', module)     // element name
    .add('default', () =>  <Button button={{ ...props }} /> ) 
