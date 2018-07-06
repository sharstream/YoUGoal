import React from "react";
import { default as SignupForm } from "./SignupForm";

export default class SignupPage extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-4 col-md-offset-4">
					<SignupForm />
				</div>
			</div>
		);
	}
}