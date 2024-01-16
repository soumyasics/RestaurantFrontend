import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div class="sticky-top">
      <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3 mb-5">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Restaurant Page
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <ul class="nav justify-content-end mx-5">
          <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu item
              </a>
              <ul class="dropdown-menu">
                <li>
                <Link class="dropdown-item" to="/addfood">
                Add food
              </Link>
                </li>
                <li>
                <Link class="dropdown-item" to="/viewfood">
                Viewfood
              </Link>
                </li>
                <li>
                <Link
                class="dropdown-item"
                to="/deletefood"
              >
                Deletefood
              </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Staff
              </a>
              <ul class="dropdown-menu">
                <li>
                <Link class="dropdown-item" to="/Staffregister">
                New Staff
              </Link>
                </li>
                <li>
                <Link class="dropdown-item" to="/stafflogin">
                Staff login
              </Link>
                </li>
                <li>
                <Link
                class="dropdown-item"
                to="/staffpassword"
              >
                Forget Password
              </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Customer
              </a>
              <ul class="dropdown-menu">
                <li>
                <Link class="dropdown-item" to="/Customerregister">
                New Customer
              </Link>
                </li>
                <li>
                <Link class="dropdown-item" to="/Customerlogin">
                Customer login
              </Link>
                </li>
                <li>
                <Link
                class="dropdown-item"
                to="/Forgetpassword"
              >
                Forget Password
              </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
