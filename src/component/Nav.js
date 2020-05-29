import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-light bg-light">
         <a class="navbar-brand">Indra Kawasan Siahaan</a>
        <ul className="nav ml-auto mr-5" style={{ fontSize: "26px" }}>
          <li className="nav-item mr-4 ml-auto">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item mr-4">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="nav-item mr-4">
            <Link to="/hire">Hire me</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
