import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
// import { Home } from './components/Home';
// import { FetchData } from './components/FetchData';
// import { Counter } from './components/Counter';
import CharacterBuilder from './views/CharacterBuilder';
import CharacterViewer from './views/CharacterViewer';
import Home from './views/Home';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Switch>
          <Route path='/view'>
            <CharacterViewer />
          </Route>
          <Route path='/builder'>
            <CharacterBuilder />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Layout>
    );
  }
}
