import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import Routes from "./components/Routes";

render(<Router><App /></Router>, document.getElementById('root'));