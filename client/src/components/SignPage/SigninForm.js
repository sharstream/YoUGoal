// src/Login.js

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SigninWidget from "./SigninWidget";
import { withAuth } from "@okta/okta-react";
// form modal sign up component
export default withAuth(class SigninForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: null
    };
    this.checkAuthentication();
  }

  async checkAuthentication() {
    //use a promise in sync operation
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  onSuccess = res => {
    if (res.status === 'SUCCESS') {
      return this.props.auth.redirect({
        sessionToken: res.session.token
      });
   } else {
     console.log("session-token expired");
    // The user can be in another authentication state that requires further action.
    // For more information about these states, see:
    //   https://github.com/okta/okta-signin-widget#rendereloptions-success-error
    }
  }

  onError = err => {
    console.log('error logging in', err);
  }

	render() {
    if (this.state.authenticated === null) return null;
		return (
      this.state.authenticated ?
        <Redirect to={{ pathname: "/" }}/> :
        <SigninWidget
          baseUrl={this.props.baseUrl}
          onSuccess={this.onSuccess}
          onError={this.onError}
        >
          <form>
            <div className="form-group">
              <label className="control-label">Username</label>
              <input
                placeholder="Enter your username"
                type="text"
                name="username"
                className="form-control"
              />
            </div>
            <div>
              <label className="control-label">Password</label>
              <input
                placeholder="Enter your password"
                type="password"
                name="password"
                className="form-control"
              />
            </div>
          </form>
        </SigninWidget>
		);
	}
});