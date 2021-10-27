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
        <a className="nav-link" href="home">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="about">About us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="services">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="work">Experience</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="portfolio">Portifolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="contacts">Contacts</a>
      </li>
    </ul>
    </div>

  </div>
</nav>
        </div>
    )
}

export default Navbar
