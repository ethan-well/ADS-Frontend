import React, { Fragment } from 'react';
import SignIn from './account/signIn';
import SignUp from './account/signUp';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
 
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/sigin">
          <SignIn />
        </Route>
        <Route path="/join">
          <SignUp/>
        </Route>
      </Switch>
    </Router>
  );
}