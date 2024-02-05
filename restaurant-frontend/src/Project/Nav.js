import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Nav() {
  let custid = localStorage.getItem('custId');
  let custname = localStorage.getItem('fname')

  console.log(custname)

  const handleClick = () => {
    custid=localStorage.removeItem('custId')
    alert("You have logged out");
    window.location.reload(false)
  }
  
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3 mb-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Restaurant Page
          </a>
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
          <ul className="nav justify-content-end mx-5">
          <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu item
              </a>
              <ul className="dropdown-menu">
                <li>
                <Link className="dropdown-item" to="/addfood">
                Add food
              </Link>
                </li>
                <li>
                <Link className="dropdown-item" to="/viewfood">
                Viewfood

              </Link>
                </li>
                <li>
                <Link
                className="dropdown-item"
                to="/deletefood"
              >
                Deletefood
              </Link>
                </li>
                {/* <li>
                <Link
                className="dropdown-item"
                to="/editfood"
              >
                Edit food
              </Link>
                </li> */}
              </ul>
            </li>
            {(custid)?(<li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {custname}
              </a>
              <ul className="dropdown-menu">
                <li>
                <Link className="dropdown-item" onClick={handleClick}>
                Log out
              </Link>
                </li>
                </ul>
                </li>):(
              <div className="d-flex">
              <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Staff
              </a>
              <ul className="dropdown-menu">
                <li>
                <Link className="dropdown-item" to="/Staffregister">
                New Staff
              </Link>
                </li>
                <li>
                <Link className="dropdown-item" to="/stafflogin">
                Staff login
              </Link>
                </li>
                <li>
                <Link
                className="dropdown-item"
                to="/staffpassword"
              >
                Forget Password
              </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Customer
              </a>
              <ul className="dropdown-menu">
                <li>
                <Link className="dropdown-item" to="/Customerregister">
                New Customer
              </Link>
                </li>
                <li>
                <Link className="dropdown-item" to="/Customerlogin">
                Customer login
              </Link>
                </li>
                <li>
                <Link
                className="dropdown-item"
                to="/Forgetpassword"
              >
                Forget Password
              </Link>
                </li>
              </ul>
            </li>
            </div>
            )}
            <li>
            <Link className="nav-link active" to="/viewcart">Cart</Link>
            </li>
            <li>
            <Link className="nav-link active" to="/payment">Payment</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
