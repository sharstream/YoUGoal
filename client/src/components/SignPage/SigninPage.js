import React, { Component } from "react";
// import { default as SigninForm } from "./SigninForm";
import { Modal, Button } from "react-bootstrap";

import { Redirect } from "react-router-dom";
import SigninWidget from "./SigninWidget";
import { withAuth } from "@okta/okta-react";

export default withAuth(class SigninPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: null,
      showModal: false
    };
    this.checkAuthentication();
  }

  componentDidMount() {
    this.setState({ showModal: true });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  }

  handleShow = () => {
    this.setState({ showModal: true });
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
    if(res.status === "SUCCESS") {
      // res.session.setCookieAndRedirect(redirectUrl);
      return this.props.auth.redirect({
        sessionToken: res.session.token
      });
    }
  }

  onError = err => {
    console.log('error logging in', err);
    // If a recoverable error occurs, this error will be lost
  }

	render() {
    if (this.state.authenticated === null) return null;
		return (
      this.state.authenticated ? (
        <Redirect to={{ pathname: "/" }}/>
      ) : (
        <div className="static-modal">
          <Modal show={this.state.showModal} animation={false} onHide={this.handleClose}>
            <Modal.Header>
              <Modal.Title>Login Page</Modal.Title>
              <button type="button" className="close" aria-label="Close" onClick={e => this.handleClose(e)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </Modal.Header>
            <Modal.Body>
              <SigninWidget
                baseUrl={this.props.baseUrl}
                onSuccess={this.onSuccess}
                onError={this.onError}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="primary" onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      )
		);
	}
});