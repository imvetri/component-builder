import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import withThemes from "storybook-addon-themes";


import Button from './Button';

export const button = {
    id: '1',
    name: 'Create'
};

export const actions = {
    onButtonClick: action('onButtonClick')
};

storiesOf('Button', module)
    .addDecorator(story => <div style={{ padding: '1rem' }}>{story()}</div>)
    .addDecorator(withKnobs)
    .addDecorator(withThemes([
        { name: "pink", class: "theme-pink", color: "#f39", default: true },
        { name: "vs", class: "theme-vs", color: "#ef5f96" },
        { name: "bbw", class: "theme-bbw", color: "#333" }
      ]))
    .add('default', () => { return <Button button={object('button', { ...button })} {...actions} /> })
