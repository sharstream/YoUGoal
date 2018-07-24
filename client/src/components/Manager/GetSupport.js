import React, { Component } from 'react'
import { Modal, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import {
  InputGroup, InputGroupAddon, Input
} from "reactstrap";

export default class GetSupport extends Component {
  state = {
    showModal: false,
    currentUserEmail: ""
  };

  componentDidMount() {
    const client = JSON.parse(localStorage.getItem("okta-token-storage"));
    if (client !== null) {
      this.setState({
        currentUserEmail: client.idToken.claims.email,
        currentUserName: client.idToken.claims.name
      });
    }
  }

  handleClose = () => {
    this.setState({ showModal: true });
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
            animation={this.state.showModal}
            backdrop={!this.state.showModal}
          >
            <Modal.Header>
              <Modal.Title>New Message to @{}</Modal.Title>
              <button type="button" className="close" aria-label="Close" onClick={e => this.handleClose(e)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="form-group">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                    <Input placeholder="username" />
                  </InputGroup>
                  <br />
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">Message:</label>
                  <textarea className="form-control" id="message-text"></textarea>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="primary" onClick={e => this.handleClose(e)}>Close
              </Button>
              <Button bsStyle="primary">Send message
              </Button>
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