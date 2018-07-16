import React from "react";
import { Redirect } from "react-router-dom";
import SigninWidget from "./SigninWidget";
import { withAuth } from "@okta/okta-react";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

export default withAuth(class ModalBootstrap4 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true,
      authenticated: null
    };
    this.checkAuthentication();
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleClose = () => {
    this.setState({ modal: true });
  }


  changeBackdrop = e => {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
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
    return this.props.auth.redirect({
      sessionToken: res.session.token
    });
  }

  onError = err => {
    console.log('error logging in', err);
  }

	 render() {
    if (this.state.authenticated === null) return null;
    return (
      this.state.authenticated ? (
        <Redirect to={{ pathname: "/" }}/>
      ) : (
        <div>
          <Modal isOpen={this.toggle} fade={false} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
            <ModalHeader toggle={this.toggle}>Login Form</ModalHeader>
            <ModalBody>
              <SigninWidget
                baseUrl={this.props.baseUrl}
                onSuccess={this.onSuccess}
                onError={this.onError}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      )
    );
  }
});