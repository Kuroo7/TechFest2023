import "./about.css"

export const About = () => {
    return (
        <>
            <div className='about' id="about_carousel">
                <div className="left">
                    <h1 className="greenNeon" >ABOUT TECHFEST</h1>
                    <p className="white" >TechFest is a two-day fiesta that calls in for various technical, egaming, and photography events, wrapped up with an exclusive event for each day. ABES has been organizing TechFest for over a years now, and with a foot fall of 2000+ students from different colleges in Delhi NCR, TechFest has been a success story</p>
                    <div className="buttons">
                        <button className="events" >EVENTS</button>
                        <button className="buy" >BUY NOW</button></div>
                </div>
                <div className="right">
                    <img src="/src/assets/logo.png" alt="logo" />
                </div>


            </div>
        </>
    )
}
