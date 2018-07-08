import React, { Component } from 'react';
import NavigationBar from "./NavigationBar";
import { Route } from "react-router-dom";
import { SignupPage as Signup, SigninPage as Signin } from "./SignPage";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        {this.props.children}
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
      </div>
    );
  }
}