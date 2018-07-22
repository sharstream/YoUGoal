import React from "react";
import {
  FormGroup, Label, Input, FormText
} from "reactstrap";
// form modal sign up component
export default class SignupForm extends React.Component {
	render() {
		return (
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
        <br />
				<div>
					<label className="control-label">Email Address</label>
					<input
            placeholder = "Enter your email address"
						type="text"
						name="email"
						className="form-control"
					/>
				</div>
        <br />
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            Upload your images or avatar.
          </FormText>
        </FormGroup>
			</form>
		);
	}
}