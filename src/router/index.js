import React from 'react';
import {Route, Switch} from 'react-router-dom';
import loadable from 'react-loadable';

// 引入组件页面
import Loading from '@components/loading';

const App = loadable ({
  loader: () => import ('@pages/app'),
  loading: Loading,
  timeout: 10000, // 10 seconds
});

const List = loadable ({
  loader: () => import ('@pages/list'),
  loading: Loading,
  timeout: 10000, // 10 seconds
});

const Error = loadable ({
  loader: () => import ('@pages/error'),
  loading: Loading,
  timeout: 10000, // 10 seconds
});

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/list" component={List} />
      <Route component={Error} />
    </Switch>
  );
};

export default Routes;
