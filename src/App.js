import React, { Component, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import * as Realm from 'realm-web';
import { Button } from 'reactstrap';

import CharacterBuilder from './views/CharacterBuilder';
import CharacterViewer from './views/CharacterViewer';
import Home from './views/Home';

import './custom.css'

const app = new Realm.App({ id: process.env.REACT_APP_REALM_APP_ID });

const UserDetail = ({ user }) => {
  return (
    <div>
      <h1>Logged in with anonymous id: {user.id}</h1>
    </div>
  );
}

const Login = ({ setUser }) => {
  const loginAnonymous = async () => {
    const user = await app.logIn(Realm.Credentials.anonymous());
    setUser(user);
  };
  return <Button onClick={loginAnonymous}>Log In</Button>;
}

const App = () => {
  // static displayName = App.name;
  const [user, setUser] = useState(app.currentUser);

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
          <div className="App">
            <div className="App-header">
              {user ? <UserDetail user={user} /> : <Login setUser={setUser} />}
            </div>
          </div>
        </Route>
      </Switch>
    </Layout>
  );
}

// App.name = displayName;
export default App;