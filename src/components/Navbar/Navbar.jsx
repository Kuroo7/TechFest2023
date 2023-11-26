import { Link } from "react-router-dom"
import logo from "../../assets/logoWithoutBG.png"
import "./navbar.css"
const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="logo-container" >
                <img className="logo" src={logo} alt="lol" />
            </div>
            <div className="nav-items" >
                <Link className="nav-links" to="/" >Home</Link >
                <Link className="nav-links" to="/" >About</Link >
                <Link className="nav-links" to="/" >Past</Link >
                <Link className="nav-links" to="/" >This Year</Link >
                <Link className="nav-links" to="/" >FAQ</Link >
                <Link className="nav-links" to="/" >Team</Link >
            </div>

        </nav>
    )
}

export default Navbar