import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  let custid = localStorage.getItem("custId");
  let custname = localStorage.getItem("fname");
  let staffid = localStorage.getItem("staffId");
  let staffname = localStorage.getItem("sfname");

  const handleClick = () => {
    custid = localStorage.removeItem("custId");
    custname = localStorage.removeItem("fname");
    alert("You have logged out");
    navigate("/Customerlogin");
    window.location.reload(false);
  };

  const handlelogout = () => {
    staffid = localStorage.removeItem("staffId");
    staffname = localStorage.removeItem("sfname");
    alert("You have logged out");
    navigate("/stafflogin");
    window.location.reload(false);
  };

  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3">
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
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit" onClick={(a)=>{a.preventDefault()}}>
              Search
            </button>
          </form>
          <ul className="nav justify-content-end mx-5">
            {custid ? (
              <div className="d-flex">
                <li className="nav-item dropdown">
                  <Link className="nav-link" to="/vieworders">
                    View Order
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link" to="/viewfood">
                    Menu item
                  </Link>
                </li>
                <li className="nav-item dropdown">
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
                </li>
                <li>
                  <Link className="nav-link active" to="/viewcart">
                    cart
                    {/* <span class="badge text-primary">2</span> */}
                  </Link>
                </li>
              </div>
            ) : staffid ? (
              <div className="d-flex">
                <li className="nav-item dropdown">
                  <Link className="nav-link" to="/staffvieworders">
                    View Order
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link" to="/staffviewfood">
                    Menu item
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {staffname}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" onClick={handlelogout}>
                        Log out
                      </Link>
                    </li>
                  </ul>
                </li>
                
              </div>
            ) : (
              <div className="d-flex">
                <li className="nav-item dropdown">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
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
                      <Link className="dropdown-item" to="/staffpassword">
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
                      <Link className="dropdown-item" to="/Forgetpassword">
                        Forget Password
                      </Link>
                    </li>
                  </ul>
                </li>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
