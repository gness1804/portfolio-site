import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import Application from './components/Application.jsx';

require('./styles.scss');

// render(<Application />, document.getElementById('application'));

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={Application}>
    <IndexRoute component={foo}></IndexRoute>
    <Route path='' component={bar}></Route>
    </Route>
  </Router>
);

render(router, document.getElementById('application'));
