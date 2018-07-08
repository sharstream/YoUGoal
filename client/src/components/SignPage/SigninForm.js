import React from "react";
// form modal sign up component
export default class SigninForm extends React.Component {
	render() {
		return (
			<form>
				<div className="form-group">
					<label className="control-label">Username</label>
					<input
						type="text"
						name="username"
						className="form-control"
					/>
				</div>
				<div>
				<label className="control-label">Password</label>
					<input
						type="password"
						name="password"
						className="form-control"
					/>
				</div>
			</form>
		);
	}
}