import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App from "../components/App";
import SignupPage from "../components/SignupPage";
import ErrorBoundary from "../components/ErrorBoundary";

export default (
	<ErrorBoundary>
		<Route path="/" component={App}>
			<Route path="/signup" component={SignupPage} />
		</Route>
	</ErrorBoundary>
)