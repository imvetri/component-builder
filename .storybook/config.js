import { configure, addParameters } from '@storybook/react';
import requireContext from 'require-context.macro';
import 'storybook-chromatic/storybook-addon';
import '../src/index.css';

const req = requireContext('../src/components', true, /.stories.js$/);

addParameters({
  options: {
    name: 'Components'
    // more configuration here
  },
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);