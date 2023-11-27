import { Link } from "react-router-dom"
import logo from "../../assets/logoWithoutBG.png"
import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import "./navbar.css"
const Navbar = () => {

    const location = useLocation();
    const lastHash = useRef('');

    // listen to location change using useEffect with location as dependency
    // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
    useEffect(() => {
        if (location.hash) {
            lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
        }

        if (lastHash.current && document.getElementById(lastHash.current)) {
            setTimeout(() => {
                document
                    .getElementById(lastHash.current)
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                lastHash.current = '';
            }, 100);
        }
    }, [location]);

    return (
        <nav className="Navbar">
            <div className="logo-container" >
                <img className="logo" src={logo} alt="lol" />
            </div>
            <div className="nav-items" >
                <Link className="nav-links" to="/" >Home</Link >
                <a className="nav-links" href="#about_carousel">About</a>
                <Link className="nav-links" to="/" >Past</Link >
                <Link className="nav-links" to="/" >This Year</Link >
                <Link className="nav-links" to="/" >FAQ</Link >
                <Link className="nav-links" to="/" >Team</Link >
            </div>

        </nav>
    )
}

export default Navbar