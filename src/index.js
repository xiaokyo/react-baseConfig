import {hot} from 'react-hot-loader/root';
import React from 'react';
import ReactDom from 'react-dom';


// routers
import Routes from '@router';

// store
import {Provider} from 'react-redux';
import store from '@store';

export const App = hot (() => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
});

ReactDom.render (<App />, document.getElementById ('app'));
