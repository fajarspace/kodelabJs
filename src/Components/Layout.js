import { Outlet, Link } from "react-router-dom";
import Header from "./Header.js"; 
import Footer from "./Footer.js"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faFlask } from '@fortawesome/free-solid-svg-icons'

const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
};

export default Layout;