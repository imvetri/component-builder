import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import withThemes from "storybook-addon-themes";

import Product from './Product';

export const product = {
    id: '1',
    title: 'Product Name',
    price: '$23.00'
};

storiesOf('Product', module)
    .addDecorator(story => <div style={{ padding: '1rem' }}>{story()}</div>)
    .addDecorator(withKnobs)
    .addDecorator(withThemes([
        { name: "pink", class: "theme-pink", color: "#f39", default: true },
        { name: "vs", class: "theme-vs", color: "#ef5f96" },
        { name: "bbw", class: "theme-bbw", color: "#333" }
      ]))
    .add('default', () => { return <Product product={object('product', { ...product })}/> }, { notes: "A default product" });