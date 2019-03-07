import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import Button from './Button';

export const button = {
    id: '1',
    name: 'Create'
};

export const actions = {
    onButtonClick: action('onButtonClick')
};

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('default', () => { return <Button button={object('button', { ...button })} {...actions} /> })
