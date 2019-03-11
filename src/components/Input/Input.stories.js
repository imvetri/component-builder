import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import Input from './Input';

export const input = {
    id: '1',
    value: 'Some text'
};

export const actions = {
    onInputFocus: action('onInputFocus')
};

storiesOf('Input', module)
    .addDecorator(story => <div style={{ padding: '1rem' }}>{story()}</div>)
    .addDecorator(withKnobs)
    .add('default', () => { return <Input input={object('input', { ...input })} {...actions} /> })
