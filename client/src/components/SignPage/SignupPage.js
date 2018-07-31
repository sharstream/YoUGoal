import React from "react";
import { default as SignupForm } from "./SignupForm";
import { Modal, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Stepper from "./Stepper";

export default class SignupPage extends React.Component {

  state = {
    showModal: false,
    redirect: ""
  };

  handleClose = e => {
    e.preventDefault();
    this.setState({ showModal: true, redirect: "/" });
  }

  handleShow = () => {
    this.setState({ showModal: true });
  }

	render() {
		return (
      !this.state.showModal ? (
        <div className="static-modal">
          <Modal
            show={!this.state.showModal}
            animation ={this.state.showModal}
            backdrop={!this.state.modal}
          >
            <Modal.Header>
              <Modal.Title>Join our community!</Modal.Title>
              <button type="button" className="close" aria-label="Close" onClick={e => this.handleClose(e)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </Modal.Header>
            <Modal.Body>
              <SignupForm />
            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="primary" onClick={e => this.handleClose(e)}>Close</Button>
              <Button bsStyle="primary" onClick={e => this.handleClose(e)}>Sign up</Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : (
        <Redirect
          from="*"
          to="/"
        />
      )
		);
	}
}