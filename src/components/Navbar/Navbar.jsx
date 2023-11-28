import { Link } from "react-router-dom"
import logo from "../../assets/logoWithoutBG.png"


import "./navbar.css"
const Navbar = () => {


    // listen to location change using useEffect with location as dependency
    // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen

    return (
        <nav className="Navbar">
            <div className="logo-container" >
                <img className="logo" src={logo} alt="lol" />
            </div>
            <div className="nav-items" >
                <Link className="nav-links" to="/" >Home</Link>
                <a className="nav-links" href="#about_carousel">About</a>
                <a className="nav-links" href="#past_carousel">Past</a>
                <a className="nav-links" to="/" >Events</a>
                <a className="nav-links" href="#faq_carousel">FAQ</a>
                <Link className="nav-links" to="/" >Team</Link>
                <a className="buy-button" href="#">Get Ticket</a>
            </div>

        </nav>
    )
}

export default Navbar