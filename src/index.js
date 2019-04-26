import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
// routers
import Routes from '@router';

// components
import Nav from '@components/nav';

ReactDom.render (
  <div>
    hello react
    <Router>
      <Nav />
      <Routes />
    </Router>
  </div>,
  document.getElementById ('app')
);
