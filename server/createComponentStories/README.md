# Component stories usage!

> createComponentStories(elements, props, componentName);

It Should create a component as follows

  
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';  // element name to be fetched.

export const props = {         // element props to be fetched. 
    id: '1',
    name: 'Create'
};

storiesOf('Button', module)     // element name
    .add('default', () =>  <Button button={{ ...props }} /> ) 


