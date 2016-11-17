import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import IndexBody from './components/IndexBody';
import Application from './components/Application.jsx';
import ProjectMenu from './components/ProjectMenu';

require('./styles.scss');

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={Application}>
    <IndexRoute component={IndexBody}></IndexRoute>
    <Route path='' component={ProjectMenu}></Route>
    </Route>
  </Router>
);

render(router, document.getElementById('application'));
