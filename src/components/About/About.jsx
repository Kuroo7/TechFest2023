import logo from "../../assets/logoWithoutBG.png"

import "./about.css"


export const About = () => {
    return (
        <>
            <div className='about' id="about_carousel">
                <div className="about-container">
                    <div className="left">
                        <h1 className="greenNeon" >
                            About TechFest
                        </h1>
                        <p className="white" >
                            Event Tech-Pravaah is a dynamic technical fest designed to create a confluence of innovation, learning, and collaboration. With the primary objective of fostering a tech-driven ecosystem, this event brings together a diverse audience comprising students, entrepreneurs, tech enthusiasts, and seasoned speakers. Through a series of engaging workshops, keynote sessions, and interactive demonstrations, Tech-Pravaah aims to inspire and empower attendees with the latest advancements in technology.

                        </p>
                        <div className="buttons">
                            <button className="events" >
                                <a href="#events_carousel">
                                    EVENTS
                                </a>
                            </button>
                            <button className="buy " >BUY NOW</button>
                        </div>
                    </div>
                    <div className="right">
                        {/* <img src="/src/assets/logo.png" alt="logo" /> */}
                        <img className="about-logo" src={logo} alt="logo" />
                    </div>
                </div>
            </div>
        </>
    )
}
