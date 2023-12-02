import { Link } from "react-router-dom"
import "./events.css"
const Events = () => {
    return (
        <>
        
            <div className="event-card" id="events_carousel" >
            <div className="wrapper">
                <Link to="/Day1" >

            <div className="profile-box1">
                <div className="text">
                    <p>DAY 1</p>
                    <p>(Events)</p>
                </div>
            </div>
                </Link>
                <Link to="/Day2" >

            <div className = "profile-box2">
                <div className="text">
                    <p>Day 2</p>
                    <p>(Events)</p>
                </div>
            </div>
                </Link>
        </div>
            </div>
        </>
    )
}

export default Events