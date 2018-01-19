import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './app/redux/store';
import Main from './app/main';

export default class App extends Component<{}> {
  render() {
    // console.log(store.getState());
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

// my-release-key.keystore
// key-store-password: candyghost1611keystore
// key-alias-password: candyghost1611keyalias
