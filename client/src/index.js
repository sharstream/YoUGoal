import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './components/App';

import routes from "./routes";

// render(<Router routes={routes} />, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));