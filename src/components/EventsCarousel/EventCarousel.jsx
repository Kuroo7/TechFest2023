import img1 from "../../assets/1_eve.jpg"
import img2 from "../../assets/2_eve.jpg"
import img3 from "../../assets/3_eve.jpg"
import img4 from "../../assets/4_eve.jpg"
import img5 from "../../assets/5_eve.jpg"
import img6 from "../../assets/6_eve.jpg"
import img7 from "../../assets/7_eve.jpg"
import img8 from "../../assets/8_eve.jpg"
import img9 from "../../assets/9_eve.jpg"
import img10 from "../../assets/10_eve.jpg"
import img11 from "../../assets/11_eve.jpg"
import img12 from "../../assets/12_eve.jpg"
import img13 from "../../assets/13_eve.jpg"
import img14 from "../../assets/14_eve.jpg"
import img15 from "../../assets/15_eve.jpg"
import img16 from "../../assets/16_eve.jpg"
import img17 from "../../assets/17_eve.jpg"
import img18 from "../../assets/18_eve.jpg"


import "./EventCarousel.css"

const EventCarousel = () => {

    return (
        <>
            <div className="carousel-container" >

                <div className="carousel">
                    <div className="slider1">
                        <div className="slide-track">
                            <div className="slide">
                                <img src={img1} />
                            </div>
                            <div className="slide">
                                <img src={img2} />
                            </div>
                            <div className="slide">
                                <img src={img3} />
                            </div>
                            <div className="slide">
                                <img src={img4} />
                            </div>
                            <div className="slide">
                                <img src={img5} />
                            </div>
                            <div className="slide">
                                <img src={img6} />
                            </div>
                            <div className="slide">
                                <img src={img7} />
                            </div>
                        </div>
                    </div>
                    <div className="slider2">
                        <div className="slide-track">
                            <div className="slide">
                                <img src={img8} />
                            </div>
                            <div className="slide">
                                <img src={img9} />
                            </div>
                            <div className="slide">
                                <img src={img10} />
                            </div>
                            <div className="slide">
                                <img src={img11} />
                            </div>
                            <div className="slide">
                                <img src={img12} />
                            </div>
                            <div className="slide">
                                <img src={img13} />
                            </div>
                            <div className="slide">
                                <img src={img14} />
                            </div>
                        </div>
                    </div>
                    <div className="slider3">
                        <div className="slide-track">
                            <div className="slide">
                                <img src={img15} />
                            </div>
                            <div className="slide">
                                <img src={img16} />
                            </div>
                            <div className="slide">
                                <img src={img17} />
                            </div>
                            <div className="slide">
                                <img src={img18} />
                            </div>
                            <div className="slide">
                                <img src={img5} />
                            </div>
                            <div className="slide">
                                <img src={img12} />
                            </div>
                            <div className="slide">
                                <img src={img1} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventCarousel