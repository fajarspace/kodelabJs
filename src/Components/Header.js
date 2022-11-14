import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faFlask } from '@fortawesome/free-solid-svg-icons'
function Header() {
    return(
        <div className="container">
        <nav>
          <ul>
            <li className="title"><Link to="/">KodeLab <FontAwesomeIcon icon={faFlask} /> </Link></li>
            <li>
              <Link to="docs"><FontAwesomeIcon icon={faBook} />  Documentation</Link>
            </li>
          </ul>
        </nav>
        </div>
    )
}
export default Header;