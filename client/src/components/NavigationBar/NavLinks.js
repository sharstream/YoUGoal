import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "@okta/okta-react";

export default withAuth(class NavLinks extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
  }

  async checkAuthentication(){
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  async componentDidMount() {
    this.checkAuthentication;
  }

  async componentDidUpdate() {
    this.checkAuthentication;
  }

  login = async() => {
    this.props.auth.login('/');
  }

  logout = async() => {
    this.props.auth.logout('/');
    console.log(this.state);
  }
  render(){
    return (
      !this.state.authenticated ? (
        <li className="nav-item">
          <Link className="nav-link" to="/" onClick={this.logout}>
            <span className="glyphicon glyphicon-log-out"></span>
              Logout
          </Link>
        </li>
      ) : (
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <span className="glyphicon glyphicon-log-in"></span>
              Login
          </Link>
        </li>
      )
    );
  }
});
