import { configure, addParameters, addDecorator } from '@storybook/react';
import requireContext from 'require-context.macro';
import 'storybook-chromatic/storybook-addon';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withInfo } from '@storybook/addon-info';
import '../src/index.css';

const req = requireContext('../src/components', true, /.stories.js$/);

const newViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

addDecorator(
  withInfo({
    header: false, // Global configuration for the info addon across all of your stories.
  })
);

addParameters({
  options: {
    name: 'Components'
    // more configuration here
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...newViewports,
    }
  }
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);