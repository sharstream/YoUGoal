import React from "react";
import { default as SignupForm } from "./SignupForm";
// import { Modal, Button } from "react-bootstrap";
import Modal from 'react-bootstrap4-modal';

export default class SignupPage extends React.Component {

  state = {
    showModal: true
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
        <Modal visible={this.state.showModal} onClickBackdrop={this.handleClose}>
          <div className="modal-header">
            <h5 className="modal-title">Join our community!</h5>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label className="control-label">Username</label>
                <input
                  placeholder = "Enter your username"
                  type="text"
                  name="username"
                  className="form-control"
                />
              </div>
              <div>
              <label className="control-label">Password</label>
                <input
                  placeholder = "Enter your password"
                  type="password"
                  name="password"
                  className="form-control"
                />
              </div>
              <div>
                <label className="control-label">Email Address</label>
                <input
                  placeholder = "Enter your email address"
                  type="text"
                  name="email"
                  className="form-control"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" onClick={this.handleClose}>
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={this.handleClose}>
              SignUp
            </button>
          </div>
        </Modal>
      </div>
		);
	}
}