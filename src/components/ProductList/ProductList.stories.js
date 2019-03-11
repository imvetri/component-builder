import React from 'react';
import { storiesOf } from '@storybook/react';

import { PureProductList } from './ProductList';
import { product } from '../Product/Product.stories';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import withThemes from "storybook-addon-themes";

export const defaultProducts = [
  { ...product, id: '1', name: 'Product 1', price: "$1" },
  { ...product, id: '2', name: 'Product 2', price: "$2" },
  { ...product, id: '3', name: 'Product 3', price: "$3" },
  { ...product, id: '4', name: 'Product 4', price: "$4" },
  { ...product, id: '5', name: 'Product 5', price: "$5" },
  { ...product, id: '6', name: 'Product 6', price: "$6" }
];

storiesOf('ProductList', module)
  .addDecorator(story => <div style={{ padding: '1rem' }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addDecorator(withThemes([
    { name: "pink", class: "theme-pink", color: "#f39", default: true },
    { name: "vs", class: "theme-vs", color: "#ef5f96" },
    { name: "bbw", class: "theme-bbw", color: "#333" }
  ]))
  .add('default', () => { return <PureProductList products={object("productlist", defaultProducts)} /> })