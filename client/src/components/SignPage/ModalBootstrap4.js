import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";
import Player from "../../pages/Player";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

export default withAuth(class ModalBootstrap4 extends Component {

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
        <div>
          <Modal isOpen={this.toggle} fade={false} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
            <ModalHeader toggle={this.toggle}>Player Rating Form</ModalHeader>
            <ModalBody>
              <Link to={"/player/" + this.props.match.params._id}>
                <Player />
              </Link>
            </ModalBody>
            <ModalFooter>
              <Button bsStyle="primary" onClick={this.handleClose}>Close</Button>
              <Button bsStyle="primary" onClick={ e => this.props.saveRanking(e)}>Save changes</Button>
            </ModalFooter>
          </Modal>
        </div>
      ) : (
        <Redirect to={{ pathname: "/" }}/>
      )
    );
  }
});