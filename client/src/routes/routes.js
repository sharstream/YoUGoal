import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App from "../components/App";
import SignupPage from "../components/SignupPage";
import ErrorBoundary from "../components/ErrorBoundary";

export default (
	<Router>
		<ErrorBoundary>
			<Route exact path="/" component={App}>
				<Route exact path="/signup" component={SignupPage} />
			</Route>
		</ErrorBoundary>
  </Router>
)