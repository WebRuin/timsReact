import 'core-js/fn/object/assign';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import ReactDOM from 'react-dom';
import Root from './components/Root';
import MapPage from './components/Pages/MapPage';
import ListPage from './components/Pages/ListPage';
import AboutPage from './components/Pages/AboutPage';

// Render the main component into the dom
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={MapPage}></IndexRoute>
      <Route path="map" component={MapPage}></Route>
      <Route path="list" component={ListPage}></Route>
      <Route path="about" component={AboutPage}></Route>
    </Route>
  </Router>,
  document.getElementById('app')
);
