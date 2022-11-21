import React from 'react'
import { IoPerson } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { IoPlanetOutline, IoFlaskSharp, IoChevronBack, IoChevronForward } from "react-icons/io5";

const Header = () => {
  return (
    <nav className="navbar container" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
        <NavLink to="/" className="navbar-item">
          <h1 className='title'>KodeLab <IoChevronBack/><IoFlaskSharp /><IoChevronForward/> </h1>
        </NavLink>

      <a href="!#" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">

        <a href='!#' className="navbar-item">
          Praktikum
        </a>

        <div className="navbar-item has-dropdown is-hoverable">
          <a href='!#' className="navbar-link">
            More
          </a>

          <div className="navbar-dropdown">
            <a href='!#' className="navbar-item">
              Tech stack
            </a>
            {/* <hr className="navbar-divider" />
            <a href='!#' className="navbar-item">
              Report an issue
            </a> */}
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <NavLink className={""} to={"/dashboard"} >
              <button className="button is-link"><IoPerson /> Login Instruktur</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    </nav>
  )
}

export default Header;