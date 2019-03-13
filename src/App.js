import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux';

import { PureInboxScreen } from '../src/components/InboxScreen/InboxScreen';
import LoginComponent from '../src/components/LoginComponent/LoginComponent';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PureInboxScreen />
        <LoginComponent />
      </Provider>
    );
  }
}

export default App;