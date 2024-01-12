import robot from "../../assets/robo.jpg"
import star from "../../assets/staricon.png"
import { Link } from 'react-router-dom';
import "./dayOneEvents.css"
import dayOneData from "../DayOneDetails/DayOneData"
const DayOneEvents = () => {
    return (

        <div className="DayOne-container">
            {dayOneData.map((list) => {
                return (
                    <div key={list.id} className="ecard1">
                        <div className="eimage">
                            <img src={robot} />
                        </div>
                        <div className="ename">
                            <p><img src={star} alt="" className="star" /></p>
                            <p className="eventname">{list.heading}</p>
                            <p><img src={star} alt="" className="star" /></p>
                        </div>
                        <hr className="hr" />
                        <div className="but">
                            <button className="register">Register</button>
                            <Link to={list.redirectLink}>
                                <button className="explore">Explore</button>
                            </Link>
                        </div>
                    </div>
                )
            })}
            {/* <div className="ecard1">
                    <div className="eimage">
                        <img src={robot}/>
                    </div>
                    <div className="ename">
                        <p><img src={star} alt="" className="star"/></p>
                        <p className="eventname">Roborace</p>
                        <p><img src={star} alt="" className="star"/></p>
                    </div>
                    <hr className="hr"/>
                    <div className="but">
                        <button className="register">Register</button>
                        <button className="explore">Explore</button>
                    </div>
                </div> */}
        </div>
    )
}

export default DayOneEvents