import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer.js"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faFlask } from '@fortawesome/free-solid-svg-icons'

const Layout = () => {
  return (
    <>
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
      <Outlet />
      <Footer />
    </>
  )
};

export default Layout;