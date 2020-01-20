import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from '../account/signIn';
import SignUp from '../account/signUp';
import PasswordReset from '../account/passwordReset';
import WithTitle from '../layout/withTittle';

export default function LocalRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
         
          <SignIn/>
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route path="/join">
          <SignUp />
        </Route>
        <Route path="/password_reset">
          <PasswordReset />
        </Route>
      </Switch>
    </Router>
  );
}
