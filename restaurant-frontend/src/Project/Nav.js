import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js" 
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">ZYVOX</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <ul class="nav justify-content-end">
    <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Home">Home</Link>
    </li>

    <li class="nav-item">
    <Link class="nav-link" to="/Login">Login</Link>
    </li>
    </ul>
    </div>
        </nav>
    </div>
  )
}

export default Nav