import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import * as Realm from 'realm-web';
import { Button } from 'reactstrap';

import MongoContext from './context/MongoContext';
import CharacterBuilder from './views/CharacterBuilder';
import CharacterViewer from './views/CharacterViewer';
import Login from './views/Login';
import Dashboard from './views/Dashboard';

import './custom.css'

const App = () => {
  // static displayName = App.name;
  const [client, setClient] = useState(null);
  const [user, setUser] = useState(null);
  const [app, setApp] = useState(new Realm.App({id: process.env.REACT_APP_REALM_APP_ID}));
  
  useEffect(() => {
    const init = async () => {
      if (!user) {
        setUser(app.currentUser ? app.currentUser : await app.logIn(Realm.Credentials.anonymous()));
      }
      if (!client) {
        setClient(app.currentUser.mongoClient('mongodb-atlas'));
      }
    }
  
    init();
  }, [app, client, user]);
  
  const renderComponent = (Component, additionalProps = {}) => {
    return (
    <MongoContext.Consumer>
      {(mongoContext) => <Component mongoContext={mongoContext} {...additionalProps} />}
    </MongoContext.Consumer>
    );
  }

  return (
    <Layout>
      <MongoContext.Provider value={{app, client, user, setClient, setUser, setApp}}>
        <Switch>
          <Route path='/dashboard' render={() => renderComponent(Dashboard)} />
          <Route path='/login' render={() => renderComponent(Login)} />
          <Route path='/view' render={() => renderComponent(CharacterViewer)} />
          <Route path='/builder' render={() => renderComponent(CharacterBuilder)} />
        </Switch>
      </MongoContext.Provider>
    </Layout>
  );
}

// App.name = displayName;
export default App;