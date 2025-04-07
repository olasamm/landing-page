import React from 'react'
import  './Navnar.css';

const Navbar = () => {
  return (
    <>


    <nav className="navbar navbar-expand-lg navbar">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Navbar</a>
 
    <div className="mx-5 d-flex " id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        <a className="nav-link active text-light" aria-current="page" href="#">About Us</a>
        <a className="nav-link active text-light" aria-current="page" href="#">Contact Us</a>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown mx-5">
          <button className="btn btn-light dropdown-toggle portal" data-bs-toggle="dropdown" aria-expanded="false">
           E-portal
          </button>
          <ul className="dropdown-menu dropdown-menu-light border-0">
            <li><a className="dropdown-item portal" href="#">Lecturer</a></li>
            <li><a className="dropdown-item portal" href="#">Student</a></li>
        
          </ul>
        </li>
      </ul>
    </div>
  
      </div>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Navbar