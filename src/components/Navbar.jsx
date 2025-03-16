import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Navbar = () => {
const [showForm,setShowForm]=useState(false)
  return (
    <nav className="navbar navbar-expand-lg m-0">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex " href="#">
          <span className="fw-bold">Kalture</span>
        </a>

        {/* Mobile Toggle Button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Museums</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">contactUs</a>
            </li>
          </ul>

          {/* Login Button */}
          <button className="btn btn-outline-light" onClick={() => setShowForm(!showForm)}>Login</button>
          

          {/* <a href="#" className="btn ms-3 btn-outline-dark">Login</a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
