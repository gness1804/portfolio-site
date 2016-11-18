import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router';

import IndexBody from './components/IndexBody';
import Application from './components/Application.jsx';
import ProjectMenu from './components/ProjectMenu';
import AboutMe from './components/AboutMe';
import Netwerker from './components/Netwerker';
import FlashShopper from './components/FlashShopper';
import WeatherApp from './components/WeatherApp';
import GameTime from './components/GameTime';
import IdeaBox from './components/IdeaBox';
import WorkHistory from './components/WorkHistory';
import Education from './components/Education';

require('./styles.scss');

render((
  <Router history={hashHistory}>
    <Route path="/" component={Application}>
      <IndexRoute component={IndexBody}></IndexRoute>
      <Route path="/projmenu" component={ProjectMenu} />
      <Route path="/netwerker" component={Netwerker} />
      <Route path="/aboutme" component={AboutMe} />
        <Route path="/workhist" component={WorkHistory} />
        <Route path="/education" component={Education} />
      <Route path="/flashshopper" component={FlashShopper} />
      <Route path="/weatherapp" component={WeatherApp} />
      <Route path="/gametime" component={GameTime} />
      <Route path="/ideabox" component={IdeaBox} />
    </Route>
  </Router>
), document.getElementById('application'));
