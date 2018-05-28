import React, { Component } from 'react';
import jwtService from './jwtService';
import withAuth from './withAuth';
import {BrowserRouter} from 'react-router-dom';
import AS_Register from './AS_Register'
import AS_RetrievePWD from './AS_RetrievePWD'
import AS_Login from './AS_Login'

const Auth = new jwtService();

class App extends Component {

  render() {
    return (
      <BrowserRouter><TitleBar /></BrowserRouter>
      <Switch>
      <Route path="/AS_Register" component={AS_Register}/>
      <Route path="/AS_RetrievePWD" component={AS_RetrievePWD}/>
      <Route path="" component={AS_Login}/>                                                         
      </Switch>                                                               
      
    );
  }
}

export default withAuth(App);
