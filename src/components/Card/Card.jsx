import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import rituraj2 from "../../assets/MainTeam/rituraj2.jpg";
import dependar from "../../assets/MainTeam/dependar.jpg";
import pratham from "../../assets/MainTeam/pratham.jpg";
import sarthak from "../../assets/MainTeam/sarthak.jpg";
import ayush from "../../assets/MainTeam/ayush.JPG";

import { SubTeam } from "./SubTeam";

export const Card = () => {
    return (
        <>
            <div className="all-cards">
                <div className="head-card">
                    <div className="main-card">
                        <div className="back"></div>
                        <div className="photo">
                            <div className="circle">
                                <img src={rituraj2} alt=""></img>
                            </div>
                        </div>
                        <div className="info">
                            <h3>Ritu Raj Pandey</h3>
                            <p className="post">General Secretary</p>
                            <p className="desc">
                                Bringing creativity to life with a passion for creating memorable experiences.
                            </p>
                            <p className="contact">+91 9508219804</p>
                            <div className="social">
                                <a href="https://www.linkedin.com/in/rituraj-panday-199746225/">
                                    <FontAwesomeIcon className=" socialIcon" icon={faLinkedin} />
                                </a>
                                <a href="https://www.instagram.com/rituraj.panday_">
                                    <FontAwesomeIcon className=" socialIcon" icon={faInstagram} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="team-cards">
                    <div className="main-card">
                        <div className="back"></div>
                        <div className="photo">
                            <div className="circle">
                                <img src={dependar} alt=""></img>
                            </div>
                        </div>
                        <div className="info">
                            <h3>Dripendra Pratap Gautam</h3>
                            <p className="post">Co-Lead</p>
                            <p className="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                                assumenda dolores adipisci.
                            </p>
                            <p className="contact">+91 9125948417</p>
                            <div className="social">
                                <a href="https://www.linkedin.com/in/dripendra-pratap-gautam-334817221/">
                                    <FontAwesomeIcon className=" socialIcon" icon={faLinkedin} />
                                </a>
                                <a href="https://www.instagram.com/dripendra_gautam">
                                    <FontAwesomeIcon className=" socialIcon" icon={faInstagram} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="main-card">
                        <div className="back"></div>
                        <div className="photo">
                            <div className="circle">
                                <img src={pratham} alt=""></img>
                            </div>
                        </div>
                        <div className="info">
                            <h3>Pratham Ajmera</h3>
                            <p className="post">Treasurer</p>
                            <p className="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                                assumenda dolores adipisci.
                            </p>
                            <p className="contact">+91 8273830577</p>
                            {/* <div className="social">
                                <a href="#">
                                    <FontAwesomeIcon className=" socialIcon" icon={faLinkedin} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon className=" socialIcon" icon={faInstagram} />
                                </a>
                            </div> */}
                        </div>
                    </div>
                    <div className="main-card">
                        <div className="back"></div>
                        <div className="photo">
                            <div className="circle">
                                <img src={sarthak} alt=""></img>
                            </div>
                        </div>
                        <div className="info">
                            <h3>Sarthak Gupta</h3>
                            <p className="post">Treasurer</p>
                            <p className="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                                assumenda dolores adipisci.
                            </p>
                            <p className="contact">+91 9508219804</p>
                            {/* <div className="social">
                                <a href="#">
                                    <FontAwesomeIcon className=" socialIcon" icon={faLinkedin} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon className=" socialIcon" icon={faInstagram} />
                                </a>
                            </div> */}
                        </div>
                    </div>
                    <div className="main-card">
                        <div className="back"></div>
                        <div className="photo">
                            <div className="circle">
                                <img src={ayush} alt=""></img>
                            </div>
                        </div>
                        <div className="info">
                            <h3>Ayush Kumar Maurya</h3>
                            <p className="post">Creative Lead</p>
                            <p className="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                                assumenda dolores adipisci.
                            </p>
                            <p className="contact">+91 12345 67890</p>
                            {/* <div className="social">
                                <a href="#">
                                    <FontAwesomeIcon className=" socialIcon" icon={faLinkedin} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon className=" socialIcon" icon={faInstagram} />
                                </a>
                            </div> */}
                        </div>
                    </div>
                    {/* {SubTeamData.map((p) => (
            <div key={p.id} className="main-card">
              <div className="back"></div>
              <div className="photo">
                <div className="circle">
                  <img src={p.photo} alt=""></img>
                </div>
              </div>
              <div className="info">
                <h3>{p.name}</h3>
                <p className="post">{p.position}</p>
                <p className="contact">{p.num}</p>
              </div>
            </div>
          ))} */}
                </div>
            </div>
            <SubTeam />
        </>
    );
};
