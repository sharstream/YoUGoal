import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import App from "../App";
import { SignupPage, SigninPage } from "../SignPage";
import ErrorBoundary from "../ErrorBoundary";

export default (
  <ErrorBoundary>
    <BrowserRouter>
      <Route exact path="/" component={App}>
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/signin" component={SigninPage} />
      </Route>
    </BrowserRouter>
  </ErrorBoundary>
)