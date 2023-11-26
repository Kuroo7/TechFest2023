import hero from "../../assets/hero.mp4"
import "./hero.css"
const Hero = () => {
    return (
        <div className="hero" >
            {/* <video className="heroVideo" controls autostart autoPlay src={hero} type="video/mp4" /> */}
            <video className="heroVideo" autoPlay muted loop src={hero} type="video/mp4" />
            {/* <video autoplay muted loop id="myVideo">
                    <source src="rain.mp4" type="video/mp4">
                </video> */}
        </div>
    )
}

export default Hero