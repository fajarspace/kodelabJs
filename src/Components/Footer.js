import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
function Footer() {
    return(
        <footer>
            <div class="container">
                <p>Built with <FontAwesomeIcon icon={faHeart} /> React.Js</p>
            </div>
        </footer>
    )
}
export default Footer;