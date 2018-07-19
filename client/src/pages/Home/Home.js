// src/components/Home/Home.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(class Home extends Component {
  state = {
    authenticated: null
  };

  checkAuthentication = async() => {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  login = async() => {
    this.props.auth.login('/');
  }

  logout = async() => {
    this.props.auth.logout('/');
  }

  render() {

    const mainContent = this.state.authenticated ? (
      <div>
        <p className="lead">You have entered the YouGoal portal,
          <Link to="/">click here</Link>
        </p>
        <button className="btn btn-light btn-lg" onClick={this.logout}>Logout</button>
      </div>
    ) : (
      <div>
        <p className="lead">If you are a YouGoal member, please contact your administrator</p>
        <button className="btn btn-dark btn-lg" onClick={this.login}>Login</button>
      </div>
    );

    return (
      <div className="jumbotron">
        <h1 className="display-4">YouGoal Staff Portal</h1>
        {mainContent}
      </div>
    );
  }
});