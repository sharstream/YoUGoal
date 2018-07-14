import React from "react";
import { Link } from 'react-router-dom';

const NavigationBar = () => {
	return (
		<nav className="navbar navbar-default navbar-dark bg-dark mb-4">
			<div className="container-fluid">
			  <div className="navbar-header">
			    <Link className="navbar-brand" to="/">YuOGoal Sport Try</Link>
			  </div>
			  <div className="navbar-brand">

			    <ul className="nav navbar-nav">
			      <li className="active"><Link to="/">Home</Link></li>
			    </ul>
			  </div>
			  <div className="collapse navbar-collapse">
			    <ul className="nav navbar-nav navbar-right">
			      <li>
			      	<Link to="/signup">
			      		<span className="glyphicon glyphicon-user"></span> Sign Up
	      			</Link>
      		  </li>
			      <li>
			      	<Link to="/signin">
			      		<span className="glyphicon glyphicon-log-in"></span> Login
		      		</Link>
      			</li>
			    </ul>
			  </div>
			</div>
		</nav>
	);
}

export default NavigationBar;