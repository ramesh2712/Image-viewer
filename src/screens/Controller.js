import React, { Component } from 'react';
import Home from '../screens/home/Home';
import Login from '../screens/login/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './profile/profile';


class Controller extends Component {

  constructor() {
    super();
    this.baseUrl = "https://api.instagram.com/v1/";
  }
  render() {
    return (
      <Router>
        <div className="main-container">
          <Route exact path='/' render={(props) => <Login {...props} baseUrl={this.baseUrl} />} />
          <Route path='/home' render={(props) => <Home {...props} baseUrl={this.baseUrl} />} />
          <Route path='/profile' render={(props) => <Profile {...props} baseUrl={this.baseUrl} />} />
        </div>
      </Router>
    )
  }
}

export default Controller;
