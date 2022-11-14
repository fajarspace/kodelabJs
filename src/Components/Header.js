import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
function Header() {
    return(
    <header>
      <div className="container">
        <nav>
          <ul>
            <li className="title">
              JSON Server
            </li>
            <li>
              <a href="https://github.com/users/typicode/sponsorship">
              <FontAwesomeIcon icon={faHeart} />GitHub Sponsors
              </a>
            </li>
            <li>
              <a href="https://my-json-server.typicode.com">
                <i className="fas fa-burn"></i>My JSON Server
              </a>
            </li>
            <li>
              <a href="https://thanks.typicode.com">
                <i className="far fa-laugh"></i>Supporters
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    )
}
export default Header;