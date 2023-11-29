import { Link } from "react-router-dom"
import logo from "../../assets/logoWithoutBG.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars,faXmark} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css"
const Navbar = () => {


    // listen to location change using useEffect with location as dependency
    // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen

    return (
        <nav className="Navbar">
            <div className="logo-container" >
                <img className="logo" src={logo} alt="lol" />
            </div>
            <input type="checkbox" id="ham"/>
            <label htmlFor="ham" className="open"><FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#00ff21",}}/></label>
            <div className="nav-items" >
                <label htmlFor="ham" className="close"><FontAwesomeIcon icon={faXmark} size="2xl" style={{color: "#00ff21",}} /></label>
                <span className="nav-up">
                    <Link className="nav-links" to="/" >Home</Link>
                </span>
                <span className="nav-up">
                <a className="nav-links" href="#about_carousel">About</a>
                </span>
                <span className="nav-up">
                <a className="nav-links" href="#past_carousel">Past</a>
                </span>
                <span className="nav-up">
                <a className="nav-links" to="/" >Events</a>
                </span>
                <span className="nav-up">
                <a className="nav-links" href="#faq_carousel">FAQ</a>
                </span>
                <span className="nav-up">
                <Link className="nav-links" to="/" >Team</Link>
                </span>
                <a className="buy-button" href="#">Get Ticket</a>
                
            </div>

        </nav>
    )
}

export default Navbar