import React, { Component } from 'react'
import { Modal, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

export default class GetSupport extends Component {
  state = {
    showModal: true,
    currentUserEmail: ""
  };

  componentDidMount() {
    const client = JSON.parse(localStorage.getItem("okta-token-storage"));
    this.setState({
      currentUserEmail: client.idToken.claims.email,
      currentUserName: client.idToken.claims.name
    });
  }

  handleClose = () => {
    this.setState({ showModal: false });
  }

  handleShow = () => {
    this.setState({ showModal: true });
  }

	render() {
		return (
			<div className="static-modal">
        <Modal show={this.state.showModal} animation={false} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>New Message to @{}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Recipient:</label>
                <input type="text" class="form-control" id="recipient-name" />
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Message:</label>
                <textarea class="form-control" id="message-text"></textarea>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close
            </Button>
            <Button bsStyle="primary">Send message
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
		);
	}
}