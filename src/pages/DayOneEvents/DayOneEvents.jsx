import "./dayOneEvents.css"
const DayOneEvents = () => {
    return (
        <>
            <div className="DayOne-container">
                <div className="ecard1">
                    <div className="eimage">
                        <img src="/src/assets/robo.jpg"/>
                    </div>
                    <div className="ename">
                        <p><img src="/src/assets/staricon.png" alt="" className="star"/></p>
                        <p className="eventname">Roborace</p>
                        <p><img src="/src/assets/staricon.png" alt="" className="star"/></p>
                    </div>
                    <hr className="hr"/>
                    <div className="but">
                        <button className="register">Register</button>
                        {/* <div className="vertical"></div> */}
                        <button className="explore">Explore</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DayOneEvents