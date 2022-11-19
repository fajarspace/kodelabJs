import React from 'react'
import { Navlink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <nav className="navbar is-fixed-top hash-shadow" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Navlink to="/dashboard" className="navbar-item">
              <img 
                src="https://bulma.io/images/bulma-logo.png" 
                width="112" 
                height="28"
                alt="logo"
                />
            </Navlink>
        
            <a href='!#' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        
          <div id="navbarBasicExample" className="navbar-menu">
        
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <button className="button is-light">
                    Log out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
