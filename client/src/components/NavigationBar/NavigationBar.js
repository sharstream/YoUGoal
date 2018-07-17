import React from "react";
import { Link } from 'react-router-dom';
import "./NavigationBar.css";

const NavigationBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<Link className="navbar-brand" to="/">You Goal : Rotten Tomatoes for FIFA</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarColor01">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link className="nav-link" to="/">
							<span className="glyphicon glyphicon-hand-left sr-only"></span>
								Home
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/signup">
							<span className="glyphicon glyphicon-user"></span>
								Sign Up
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/signin">
							<span className="glyphicon glyphicon-log-in"></span>
								Login
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/about">
							<span className="glyphicon glyphicon-sunglasses"></span>
								About
						</Link>
					</li>
					<li className="nav-item active">
						<Link className="nav-link" to="/getsupport">
							<span className="glyphicon glyphicon-phone-alt"></span>
								Get Support
						</Link>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="text" placeholder="Search" />
					<button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
				</form>
			</div>
		</nav>
	);
}

export default NavigationBar;