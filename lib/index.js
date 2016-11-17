import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router';

import IndexBody from './components/IndexBody';
import Application from './components/Application.jsx';
import ProjectMenu from './components/ProjectMenu';
import AboutMe from './components/AboutMe';
import Netwerker from './components/Netwerker';
import FlashShopper from './components/FlashShopper';

require('./styles.scss');

render((
  <Router history={hashHistory}>
    <Route path="/" component={Application}>
      <IndexRoute component={IndexBody}></IndexRoute>
      <Route path="/projmenu" component={ProjectMenu} />
      <Route path="/netwerker" component={Netwerker} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/flashshopper" component={FlashShopper} />
    </Route>
  </Router>
), document.getElementById('application'));
