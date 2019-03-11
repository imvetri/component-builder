import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ${componentName} from `./${componentName}`;  // element name to be fetched.


storiesOf(`${componentName}`, module)     // element name
    .add('default', () =>  <`${componentName}` /> ) 
