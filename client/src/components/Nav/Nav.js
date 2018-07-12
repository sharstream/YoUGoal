import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      You Goal : Rotten Tomatoes for FIFA
    </a>
    <div>
      <button
        className="navbar-toggler navbar-right ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <form className="navbar-form navbar-right ml-auto" href="/login">
        <div className="form-group navbar-right ml-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
          />
        </div>
        <button type="submit" className="btn btn-default navbar-right ml-auto">
          Submit
        </button>
      </form>
    </div>
    <div className="collapse navbar-collapse">
      <ul className="nav navbar-nav navbar-right ml-auto">
        <li className="active navbar-right ml-auto">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link" href="#">
            Sign Up
          </a>
        </li>
        <li>
          <a className="nav-link" href="#">
            {" "}
            Login
          </a>
        </li>
      </ul>
    </div>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="" data-target="#myModal" data-toggle="modal">
          About
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;
