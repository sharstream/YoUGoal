import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default () => {
	return (
		<div className="pos-f-t">
			<div className="collapse" id="navbarToggleExternalContent">
		    <div className="bg-dark p-4">
		      <h4 className="text-white">Collapsed content</h4>
		      <span className="text-muted">Display Players Table</span>
		      <span className="text-muted">Filter by Player</span>
		      <span className="text-muted">Filter by Rankings</span>
		    </div>
		  </div>
			<nav className="navbar navbar-default">
				<div className="container-fluid">
				  <div className="navbar-header">
				    <a className="navbar-brand" href="#">YoUGoal Sport Try</a>
				  </div>
				  <div className="navbar-brand">

				    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
				      <span className="navbar-toggler-icon"></span>
				    </button>
				    <ul className="nav navbar-nav">
				      <li className="active"><a href="#">Home</a></li>
				    </ul>
				    <form className="navbar-form navbar-left" href="/login">
				      <div className="form-group">
				        <input type="text" className="form-control" placeholder="Search" />
				      </div>
				      <button type="submit" className="btn btn-default">Submit</button>
				    </form>
				  </div>
				  <div className="collapse navbar-collapse">
				    <ul className="nav navbar-nav navbar-right">
				      <li>
				      	<a href="#">
				      		<span className="glyphicon glyphicon-user"></span> Sign Up
		      			</a>
		      		  </li>
				      <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
				    </ul>
				  </div>
				</div>
			</nav>
		</div>
	);
}