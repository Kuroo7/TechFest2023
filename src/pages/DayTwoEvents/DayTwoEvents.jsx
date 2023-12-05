import "./dayTwoEvents.css"
const DayTwoEvents = () => {
    return (
        <>
            <div className="DayTwo-container" >
            <div className="ecard2">
                    <div className="eimage">
                        <img src="/src/assets/robo.jpg"/>
                    </div>
                    <div className="ename">
                        <p><img src="/src/assets/diamondicon.png" alt="" className="diamond"/></p>
                        <p className="eventname">Roborace</p>
                        <p><img src="/src/assets/diamondicon.png" alt="" className="diamond"/></p>
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

export default DayTwoEvents