import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, browserHistory } from "react-router";
import App from './components/App';

import routes from "./routes";

// render(<Router history={browserHistory} routes={routes} />, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));