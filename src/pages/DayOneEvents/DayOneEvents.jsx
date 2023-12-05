import robot from "../../assets/robo.jpg"
import star from "../../assets/staricon.png"
import "./dayOneEvents.css"
const DayOneEvents = () => {
    return (
        <>
            <div className="DayOne-container">
                <div className="ecard1">
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
                </div>
            </div>
        </>
    )
}

export default DayOneEvents