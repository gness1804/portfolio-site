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
import WeatherTracker from './components/WeatherTracker';
import FareHarbor from './components/FareHarbor';
import LoremIpsum from './components/LoremIpsum';
import ColorChanger from './components/ColorChanger';
import NumberGuesser from './components/NumberGuesser';
import LinkedList from './components/LinkedList';
import ToDoBox from './components/ToDoBox';

require('./styles.scss');

render((
  <Router history={hashHistory}>
    <Route path="/" component={Application}>
      <IndexRoute component={IndexBody}></IndexRoute>
      <Route path="/projmenu" component={ProjectMenu} />
      <Route path="/netwerker" component={Netwerker} />
      <Route path="/weather-tracker" component={WeatherTracker} />
      <Route path="/fareharbor" component={FareHarbor} />
      <Route path="/aboutme" component={AboutMe} />
        <Route path="/workhist" component={WorkHistory} />
        <Route path="/education" component={Education} />
      <Route path="/flashshopper" component={FlashShopper} />
      <Route path="/weatherapp" component={WeatherApp} />
      <Route path="/gametime" component={GameTime} />
      <Route path="/ideabox" component={IdeaBox} />
      <Route path="/lorem-ipsum" component={LoremIpsum} />
      <Route path="/color-changer" component={ColorChanger} />
      <Route path="/number-guesser" component={NumberGuesser} />
      <Route path="/linked-list" component={LinkedList} />
      <Route path="/todo-box" component={ToDoBox} />
    </Route>
  </Router>
), document.getElementById('application'));
