import React from "react";
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
		);
	}
}