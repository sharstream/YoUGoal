import React from "react";
import { default as SigninForm } from "./SigninForm";
import { Modal, Button } from "react-bootstrap";

export default class SigninPage extends React.Component {

  state = {
    showModal: false
  };

  componentDidMount = () => {
    this.setState({ showModal: true });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  }

  handleShow = () => {
    this.setState({ showModal: true });
  }

	render() {
		return (
      <div className="static-modal">
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Login Page</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SigninForm />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
            <Button bsStyle="primary">Log In</Button>
          </Modal.Footer>
        </Modal>
      </div>
		);
	}
}