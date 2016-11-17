import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router';

import IndexBody from './components/IndexBody';
import Application from './components/Application.jsx';
import ProjectMenu from './components/ProjectMenu';
import AboutMe from './components/AboutMe';

require('./styles.scss');

render((
  <Router history={hashHistory}>
    <Route path="/" component={Application} />
    <Route path="/projmenu" component={ProjectMenu} />
    <Route path="/aboutme" component={AboutMe} />
  </Router>
), document.getElementById('application'));
