import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ pc }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            E-commerce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/wishlist">
                  Wishlist
                </Link>
              </li>
            </ul>
            <li>
              <Link to="/cart">
                <i
                  className="fas fa-shopping-cart fa-2x"
                  style={{ color: "white", marginRight: "3rem" }}
                >
                  {pc !== 0 ? <label id="cart-count">{pc}</label> : <></>}
                </i>
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
