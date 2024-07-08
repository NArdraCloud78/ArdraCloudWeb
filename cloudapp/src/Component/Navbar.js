import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <section className="header sticky py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav justify-content-center">
                    <li className="nav-item mx-1">
                      <Link className="nav-link active" aria-current="page" to="/">
                        <img src="frontend/assets/images/logo/Logo.png" alt="Logo" />
                      </Link>
                    </li>
                    <li className="nav-item py-2">
                      <a className="nav-link active" href="home#features">Features</a>
                    </li>
                    <li className="nav-item py-2">
                      <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item py-2">
                      <a className="nav-link" href="home#developers">Developers</a>
                    </li>
                    <li className="nav-item py-2">
                      <a className="nav-link" href="home#resources">Resources</a>
                    </li>
                    <li className="nav-item py-2">
                      <Link className="nav-link" to="/pricing">Pricing</Link>
                    </li>
                    <li className="nav-item py-2">
                      <a href="https://app.ardracloud.com/" className="btn loginBtn" type="submit">Sign In</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
