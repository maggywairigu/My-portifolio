import React from "react"
import logo from "../logo3l.png"
//React fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
            
    <div className="container">
  <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo <3"></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <FontAwesomeIcon icon={faBars} style={{color: "white"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Our work</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Portifolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contacts</a>
      </li>
    </ul>
    </div>

  </div>
</nav>
        </div>
    )
}

export default Navbar
