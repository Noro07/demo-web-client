import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import LandingApp from 'landing-web';
import configureStore from './stores/configuresStore';

const store = configureStore();

const APP = () => (
  <div>
    <Switch>
      <Route path="/" component={LandingApp} exact />
    </Switch>
  </div>
);

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <APP />
    </Provider>
  </HashRouter>,
  document.getElementById('content')
);
