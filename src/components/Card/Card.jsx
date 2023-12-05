import "./card.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
export const Card = () => {
    return (
        <div className="all-cards">
            <div className="head-card">
                <div className="main-card">
                    <div className="back"></div>
                    <div className="photo">
                        <div className="circle">
                            <img src="/src/assets/sample.jpeg" alt=""></img>
                        </div>
                    </div>
                    <div className="info">
                        <h3>Lorem Ipsum</h3>
                        <p className="post">General Secretary</p>
                        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda dolores adipisci.</p>
                        <p className="contact">+91 12345 67890</p>
                        <div className="social">
                            <a href="#"><FontAwesomeIcon className=' socialIcon' icon={faLinkedin} /></a>
                            <a href="#"><FontAwesomeIcon className=' socialIcon' icon={faInstagram} /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team-cards">
                <div className="main-card">
                    <div className="back"></div>
                    <div className="photo">
                        <div className="circle">
                            <img src="/src/assets/sample.jpeg" alt=""></img>
                        </div>
                    </div>
                    <div className="info">
                        <h3>Lorem Ipsum</h3>
                        <p className="post">General Secretary</p>
                        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda dolores adipisci.</p>
                        <p className="contact">+91 12345 67890</p>
                        <div className="social">
                            <a href="#"><FontAwesomeIcon className=' socialIcon' icon={faLinkedin} /></a>
                            <a href="#"><FontAwesomeIcon className=' socialIcon' icon={faInstagram} /></a>
                        </div>
                    </div>
                </div>
                <div className="main-card">
                    <div className="back"></div>
                    <div className="photo">
                        <div className="circle">
                            <img src="/src/assets/sample.jpeg" alt=""></img>
                        </div>
                    </div>
                    <div className="info">
                        <h3>Lorem Ipsum</h3>
                        <p className="post">General Secretary</p>
                        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda dolores adipisci.</p>
                        <p className="contact">+91 12345 67890</p>
                        <div className="social">
                            <a href="#"><FontAwesomeIcon className=' socialIcon' icon={faLinkedin} /></a>
                            <a href="#"><FontAwesomeIcon className=' socialIcon' icon={faInstagram} /></a>
                        </div>
                    </div>
                </div>
                <div className="main-card">
                    <div className="back"></div>
                    <div className="photo">
                        <div className="circle">
                            <img src="/src/assets/sample.jpeg" alt=""></img>
                        </div>
                    </div>
                    <div className="info">
                        <h3>Lorem Ipsum</h3>
                        <p className="post">General Secretary</p>
                        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda dolores adipisci.</p>
                        <p className="contact">+91 12345 67890</p>
                        <div className="social">
                            <a href="#"><FontAwesomeIcon className=' socialIcon' icon={faLinkedin} /></a>
                            <a href="#"><FontAwesomeIcon className=' socialIcon' icon={faInstagram} /></a>
                        </div>
                    </div>
                </div>
                <div className="main-card">
                    <div className="back"></div>
                    <div className="photo">
                        <div className="circle">
                            <img src="/src/assets/sample.jpeg" alt=""></img>
                        </div>
                    </div>
                    <div className="info">
                        <h3>Lorem Ipsum</h3>
                        <p className="post">General Secretary</p>
                        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda dolores adipisci.</p>
                        <p className="contact">+91 12345 67890</p>
                        <div className="social">
                            <a href="#"><FontAwesomeIcon className=' socialIcon' icon={faLinkedin} /></a>
                            <a href="#"><FontAwesomeIcon className=' socialIcon' icon={faInstagram} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
