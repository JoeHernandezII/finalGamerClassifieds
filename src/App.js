import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './user/pages/Users';
import NewTag from './gamertags/pages/NewTag';

const App = () => {
  return ( 
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/gamertags/new" exact>
          <NewTag />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
